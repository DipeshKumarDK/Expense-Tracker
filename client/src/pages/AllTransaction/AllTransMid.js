import React from "react";
import TransactionUnit from "../../components/TransactionUnit";
import { useSelector } from 'react-redux';

function AllTransMid({trans}) {

  const myIncome=useSelector((state)=> 
  state.changeIncome
  );

  const myExpense=useSelector((state)=> 
  state.changeExpense
  );

  return (
    <div className="bg-[#55575e] xl:w-3/5 lg:w-2/3 w-full lg:p-6 p-3 lg:h-full rounded-md">
      <section className="">
        <h2 className="sm:text-4xl text-3xl">Your Transactions</h2>
      </section>
      <section className="mt-6 p-4 bg-[#494949] text-2xl flex justify-center rounded-lg">
        <h2>
          Current Balance: <span className="text-purple-500">${myIncome - myExpense}</span>
        </h2>
      </section>
      <section className="mt-6">
        <h2 className="text-2xl">All Transactions</h2>
        <div className="h-[435px] overflow-y-scroll scrollbar rounded-lg bg-[#494949] border-[3px] border-slate-300 mt-3 pl-3 pr-3 pt-1 pb-1">
          {trans?.map((elem) => {
            return (
              <TransactionUnit
                key={elem?._id}
                title={elem?.title}
                amount={elem?.amount}
                date={elem?.date}
                description={elem?.description}
                id={elem?.id}
                _id={elem?._id}
                type={elem?.type}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default AllTransMid;
