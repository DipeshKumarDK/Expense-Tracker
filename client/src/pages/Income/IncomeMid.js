import React, { useEffect, useState } from "react";
import TransactionUnit from "../../components/TransactionUnit";
import axios from "axios";
import { useSelector } from 'react-redux';

function IncomeMid() {
  const [allExpense, setAllExpense] = useState([]);

  const myUser=useSelector((state)=> 
  state.changeUser
  );

  const getIncomes = async (e) => {
    try {
      const res = await axios.get("/api/transaction/income/" + myUser?._id);
      setAllExpense(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getIncomes();
  }, []);

  return (
    <div className="bg-[#55575e] lg:w-3/5 w-full h-full rounded-md">
      <section className="mt-8">
        <h2 className="text-2xl">All Incomes</h2>
        <div className="h-[435px] overflow-y-scroll scrollbar rounded-lg bg-[#494949] border-[3px] border-slate-300 mt-3 sm:pl-3 sm:pr-3 pl-2 pr-2 pt-1 pb-1">
          {allExpense?.map((elem) => {
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

export default IncomeMid;
