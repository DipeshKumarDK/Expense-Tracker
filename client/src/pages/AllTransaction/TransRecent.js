import React from 'react'

function TransRecent({trans, thisMonth}) {
  return (
    <div className="bg-[#55575e] xl:w-2/5 lg:w-1/3 w-full lg:pt-16 pt-6 lg:pb-8 pb-4 lg:pl-2 lg:pr-4 pl-3 pr-3 lg:h-full rounded-md lg:ml-4">
    <h2 className="xl:text-3xl text-2xl text-slate-200 lg:mt-4">Recent Activities</h2>
    <section className="mt-3">
    {trans?.map((elem) => {
          return (
            <div className={`flex justify-between bg-[#2e2f34] ${elem?.type==='income'?'text-green-400':'text-red-400'} p-3 rounded-md mt-2 mb-2`}>
              <h3>{elem?.title}</h3>
              <h3>${elem?.amount}</h3>
            </div>
          );
        })}
    </section>
    <h2 className="mt-8 xl:text-3xl text-2xl text-slate-200">This Month</h2>
    <section className="mt-2">
        <div className=" bg-[#353638] rounded-lg flex text-purple-400 justify-between p-3 mt-2 mb-2">
          <h3>Total Income</h3>
          <h2 className="">$ {thisMonth.this_income}</h2>
        </div>
        <div className=" bg-[#353638] rounded-lg flex text-purple-400 justify-between p-3 mt-2 mb-2">
          <h3>Total Expense</h3>
          <h2 className="">$ {thisMonth.this_expense}</h2>
        </div>
        <div className=" bg-[#353638] rounded-lg flex text-purple-400 justify-between p-3 mt-2 mb-2">
          <h3>Total Balance</h3>
          <h2 className="">$ {thisMonth.this_income - thisMonth.this_expense}</h2>
        </div>
        <div className=" bg-[#353638] rounded-lg flex text-purple-400 justify-between p-3 mt-2 mb-2">
          <h3>Transactions</h3>
          <h2 className="">$ {thisMonth.this_all}</h2>
        </div>
      </section>
  </div>
  )
}

export default TransRecent