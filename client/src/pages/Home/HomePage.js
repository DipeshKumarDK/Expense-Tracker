import React, { useEffect, useState } from "react";
import HomeMid from "./HomeMid";
import Recent from "./Recent";
import LeftSide from "../../components/LeftSide";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { changeTotal, changeIncome, changeExpense } from "../../actions/index";

function HomePage() {
  const [allExpense, setAllExpense] = useState([]);
  const [all, setAll] = useState(0);
  const [myIncome, setMyIncome] = useState(0);
  const [myExpense, setMyExpense] = useState(0);

  const [sendIncome, setSendIncome] = useState([]);
  const [sendExpense, setSendExpense] = useState([]);

  const dispatch = useDispatch();

  const myUser = useSelector((state) => state.changeUser);

  const getIncomes = async (e) => {
    try {
      const res = await axios.get("/api/transaction/all/" + myUser?._id);
      setAllExpense(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getIncomes();
  }, []);

  const [sortExpense, setSortExpense] = useState([]);

  const Sort = () => {
    let res = allExpense
    res.sort((a,b) => Date.parse(b?.date) - Date.parse(a?.date))
    setSortExpense(res);
  };

  useEffect(() => {
    Sort();
  }, [allExpense]);

  const [sortNewExpense, setSortNewExpense] = useState([]);

  const SortNew = () => {
    let res = allExpense
    res.sort((a,b) => Date.parse(a?.date) - Date.parse(b?.date))
    setSortNewExpense(res);
  };

  useEffect(() => {
    SortNew();
  }, [allExpense]);

  const calculate = () => {
    let i;
    let _income = 0,
      _expense = 0,
      _all = 0;

    let send_income = [], send_expense = []

    for (i = 0; i < sortNewExpense.length; i++) {
      if (allExpense[i]?.type === "income") {
        _income = _income + allExpense[i]?.amount;
        send_income.push(allExpense[i])
      } else {
        _expense = _expense + allExpense[i]?.amount;
        send_expense.push(allExpense[i])
      }

      _all = i + 1;
    }

    setAll(_all);
    dispatch(changeTotal(_all));
    localStorage.removeItem("expense_total");
    localStorage.setItem("expense_total", JSON.stringify(_all));

    setMyExpense(_expense);
    dispatch(changeExpense(_expense));
    localStorage.removeItem("expense_expense");
    localStorage.setItem("expense_expense", JSON.stringify(_expense));

    setMyIncome(_income);
    dispatch(changeIncome(_income));
    localStorage.removeItem("expense_income");
    localStorage.setItem("expense_income", JSON.stringify(_income));

    setSendExpense(send_expense);
    setSendIncome(send_income);
  };

  useEffect(() => {
    calculate();
  }, [sortNewExpense]);

  const days = (date_1, date_2) => {
    let ori_date_2 = date_2.slice(0,10);
    let _date_2 = new Date(ori_date_2);
    let difference = date_1.getTime() - _date_2.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));

    return TotalDays;
  };

  const [monthThis, setMonthThis] = useState([]);

  const _Month = () => {
    let now = new Date();
    const thisMonth = allExpense.filter(
      (project) => days(now, project?.date) < 30
    );

    let i;
    let _income = 0,
      _expense = 0,
      _all = 0;
    for (i = 0; i < thisMonth.length; i++) {
      if (thisMonth[i]?.type === "income") {
        _income = _income + thisMonth[i]?.amount;
      } else {
        _expense = _expense + thisMonth[i]?.amount;
      }

      _all = i + 1;
    }

    const final = {
      this_income: _income,
      this_expense: _expense,
      this_all: _all
    }

    setMonthThis(final)
  };

  useEffect(() => {
    _Month();
  }, [allExpense]);

  return (
    <div className="md:flex bg-[#00040f] lg:min-h-screen text-white lg:p-6 p-3">
      <div className="xl:w-1/5 md:w-1/3 w-full">
        <LeftSide />
      </div>
      <div className="bg-[#55575e] md:ml-4 rounded-md md:w-4/5 w-full lg:flex z-20">
        <HomeMid expense={myExpense} income={myIncome} all={all} incomes={sendIncome} allTrans={allExpense} expenses={sendExpense}/>
        <Recent trans={sortExpense.slice(0, 4)} thisMonth={monthThis}/>
      </div>
    </div>
  );
}

export default HomePage;
