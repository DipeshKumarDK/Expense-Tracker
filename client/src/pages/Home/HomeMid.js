import React from "react";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import moment from 'moment'

import { Line } from "react-chartjs-2";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function HomeMid({ all, income, expense, expenses, incomes, allTrans }) {

  const dateFormat = (date) =>{
    return moment(date).format('DD/MM/YYYY')
  }

  const data = {
    labels: allTrans.map((inc) => {
      const { date } = inc;
      return dateFormat(date);
    }),
    datasets: [
      {
        label: "Income",
        data: [
          ...incomes.map((income) => {
            const { amount } = income;
            return amount;
          }),
        ],
        backgroundColor: "green",
        tension: 0.2,
      },
      {
        label: "Expenses",
        data: [
          ...expenses.map((expense) => {
            const { amount } = expense;
            return amount;
          }),
        ],
        backgroundColor: "red",
        tension: 0.2,
      },
    ],
  };

  return (
    <div className="bg-[#55575e] xl:w-3/5 lg:w-2/3 w-full lg:p-6 p-3 lg:h-full rounded-md">
      <section className="">
        <h2 className="sm:text-4xl text-2xl">Analyse Your Expenses</h2>
        {/* <img src={pic} className="h-96 w-full mt-3 rounded-md" /> */}
        <div className="bg-[#FCF6F9] border-[2px] border-[#FFFFFF] mt-3 w-full sm:h-96 h-64 rounded-md">
          <Line data={data} options={{ maintainAspectRatio: false }} className="" />
        </div>
      </section>
      <section className="grid grid-cols-2 gap-[15px] mt-6">
        <div className=" bg-[#353638] rounded-lg flex justify-center p-3">
          <div>
            <h3 className="sm:text-base text-sm">Total Income</h3>
            <h2 className="sm:text-3xl text-xl text-center">$ {income}</h2>
          </div>
        </div>
        <div className=" bg-[#353638] rounded-lg flex justify-center p-3">
          <div>
            <h3 className="sm:text-base text-sm">Total Expenses</h3>
            <h2 className="sm:text-3xl text-xl text-center">$ {expense}</h2>
          </div>
        </div>
        <div className=" bg-[#353638] rounded-lg flex justify-center p-3">
          <div>
            <h3 className="sm:text-base text-sm">Total Balance</h3>
            <h2 className="sm:text-3xl text-xl text-center">
              $ {income - expense}
            </h2>
          </div>
        </div>
        <div className=" bg-[#353638] rounded-lg flex justify-center p-3">
          <div>
            <h3 className="sm:text-base text-sm">Transactions</h3>
            <h2 className="sm:text-3xl text-xl text-center">{all}</h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeMid;
