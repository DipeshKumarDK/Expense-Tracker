import React, { useEffect, useState } from "react";
import AllTransMid from './AllTransMid'
import TransRecent from './TransRecent'
import LeftSide from "../../components/LeftSide";
import axios from "axios";
import { useSelector } from 'react-redux';

function AllTransaction() {

  const [allExpense, setAllExpense] = useState([]);

  const myUser=useSelector((state)=> 
  state.changeUser
  );

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

  const days = (date_1, date_2) => {
    let ori_date_2 = date_2.slice(0,10);
    let _date_2 = new Date(ori_date_2);
    let difference = date_1.getTime() - _date_2.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));

    return TotalDays;
  };

  const [sortExpense, setSortExpense] = useState([])

  const Sort = () => {
    let res = allExpense
    res.sort((a,b) => Date.parse(b?.date) - Date.parse(a?.date))
    setSortExpense(res);
  }

  useEffect(() => {
    Sort();
  }, [allExpense]); 

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
    <div className="md:flex bg-[#00040f] min-h-screen text-white lg:p-6 p-3">
    <div className='xl:w-1/5 md:w-1/3 w-full'>
       <LeftSide/>
    </div>
    <div className='bg-[#55575e] md:ml-4 rounded-md md:w-4/5 w-full lg:flex z-20'>
        <AllTransMid trans={allExpense}/>
        <TransRecent trans={(sortExpense).slice(0,4)} thisMonth={monthThis}/>
    </div>
    </div>
  )
}

export default AllTransaction