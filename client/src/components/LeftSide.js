import React, { useState } from "react";
import pic from "../assets/avatar.jpg";
import dashboard from "../assets/dashboard.png";
import transaction from "../assets/transaction.png";
import income from "../assets/income.png";
import expense from "../assets/expense.png";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from 'react-redux';

function LeftSide() {
  const [ys, setYes] = useState(0);

  const changeYes = () => {
    if (ys === 1) {
      setYes(0);
    } else {
      setYes(1);
    }
  };

  const myUser=useSelector((state)=> 
  state.changeUser
  );

  const navigate = useNavigate()

  const logOut = () => {
    localStorage.removeItem('expense_user');
    navigate("/")
  }

  return (
    <div className="h-full">
      <div className="bg-[#55575e] pt-8 pb-8 lg:pl-5 lg:pr-5 pl-3 pr-2 h-full rounded-lg md:block hidden">
        <section className="flex ">
          <img
            src={pic}
            className="h-16 w-16 border-[3px] border-white rounded-full shadow-lg shadow-white"
          />
          <div className="pt-1 ml-4">
            <h3 className="mt-0.5 text-xl">{myUser?.username}</h3>
            <div onClick={logOut} className="text-slate-300 text-sm cursor-pointer">LogOut</div>
          </div>
        </section>
        <section className="mt-8">
          <Link
            to="/home"
            className="flex hover:bg-slate-200 hover:text-slate-800 p-2 rounded-md cursor-pointer"
          >
            <img src={dashboard} className="h-8 w-8" />
            <h3 className="lg:ml-5 ml-3 mt-0.5">Dashboard</h3>
          </Link>
          <Link
            to="/allTransaction"
            className="flex mt-1 hover:bg-slate-200 hover:text-slate-800 p-2 rounded-md cursor-pointer"
          >
            <img src={transaction} className="h-8 w-8" />
            <h3 className="lg:ml-5 ml-3 mt-0.5">All Transactions</h3>
          </Link>
          <Link
            to="/income"
            className="flex mt-1 hover:bg-slate-200 hover:text-slate-800 p-2 rounded-md cursor-pointer"
          >
            <img src={income} className="h-8 w-8" />
            <h3 className="lg:ml-5 ml-3 mt-0.5">Your Income</h3>
          </Link>
          <Link
            to="/expense"
            className="flex mt-1 hover:bg-slate-200 hover:text-slate-800 p-2 rounded-md cursor-pointer"
          >
            <img src={expense} className="h-8 w-8" />
            <h3 className="lg:ml-5 ml-3 mt-0.5">Your Expenses</h3>
          </Link>
        </section>
      </div>
      <div className="bg-[#55575e] rounded-lg mb-2 sm:p-3 p-1 md:hidden">
        <section className="flex justify-between">
          <div className="flex">
          <GiHamburgerMenu
            onClick={changeYes}
            className="h-10 w-10 mt-2 mb-2 p-2 sm:hidden bg-white text-slate-700 ml-1 mr-3 rounded-full cursor-pointer"
          />
            <h3 className="text-xl mt-[12px]">{myUser?.username}</h3>
          </div>
          <div className="sm:flex hidden justify-end pt-0.5">
            <Link to="/home" className="ml-3">
              Dashboard
            </Link>
            <Link to="/allTransaction" className="ml-3">
              Transactions
            </Link>
            <Link to="/income" className="ml-3">
              Income
            </Link>
            <Link to="/expense" className="ml-3">
              Expenses
            </Link>
            <div onClick={logOut} className="cursor-pointer ml-3">
              LogOut
            </div>
          </div>
          <div onClick={logOut} className="cursor-pointer mr-3 mt-[15px]">
              LogOut
            </div>
        </section>
      </div>
      <div className={`sm:hidden ${ys===1?'':'hidden'} bg-[#55575e] p-2 mb-2 z-30`}>
        <div>
          <Link to="/home" className="mt-2">
            Dashboard
          </Link>
        </div>
        <div>
          <Link to="/allTransaction" className="mt-2">
            Transactions
          </Link>
        </div>
        <div>
          <Link to="/income" className="mt-2">
            Income
          </Link>
        </div>
        <div>
          <Link to="/expense" className="mt-2">
            Expenses
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
