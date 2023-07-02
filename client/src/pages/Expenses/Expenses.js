import React from 'react'
import ExpenseMid from './ExpenseMid'
import ExpenseForm from './ExpenseForm'
import LeftSide from "../../components/LeftSide";
import { useSelector } from 'react-redux';

function Expenses() {

  const myExpense=useSelector((state)=> 
  state.changeExpense
  );

  return (
    <div className="md:flex bg-[#00040f] min-h-screen text-white lg:p-6 p-3">
    <div className='xl:w-1/5 md:w-1/3 w-full'>
       <LeftSide/>
    </div>
    <div className="bg-[#55575e] md:w-4/5 w-full md:ml-4 rounded-md sm:p-6 p-3">
      <section className="">
        <h2 className="sm:text-4xl text-3xl">Your Expenses</h2>
      </section>
      <section className="mt-4 p-4 bg-[#494949] text-2xl flex justify-center rounded-lg">
        <h2>
          Total Expenses: <span className="text-red-500">${myExpense}</span>
        </h2>
      </section>
      <div className="lg:flex">
         <ExpenseMid/>
         <ExpenseForm/>
      </div>
    </div>
    </div>
  )
}

export default Expenses