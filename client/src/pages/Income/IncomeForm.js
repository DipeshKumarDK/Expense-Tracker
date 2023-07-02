import React, { useRef } from "react";
import axios from "axios";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

function IncomeForm() {

  const title = useRef();
  const amount = useRef();
  const date = useRef();
  const description = useRef();

  const navigate = useNavigate();

  const myUser=useSelector((state)=> 
  state.changeUser
  );

  const handleClick = async (e) => {
    e.preventDefault();
      const user = {
        title: title.current.value,
        id: myUser?._id,  
        amount: amount.current.value,
        type: "income", 
        date: date.current.value,
        description: description.current.value, 
      };
      try {
        const res = await axios.post("/api/transaction/create", user);
        window.alert("Successfully added an income") 
        navigate("/home")

      } catch (err) {
        window.alert("Something went wrong")
        window.location.reload();
      }
  };

  return (
    <div className="bg-[#55575e] lg:w-2/5 w-full h-full rounded-md lg:pl-6">
      <section className="mt-8">
        <h2 className="text-2xl">Add A New Income</h2>
        <form onSubmit={handleClick} className="mt-3">
          <input
            className="p-3 placeholder-slate-300 border-[2px] border-slate-200 bg-[#3b3c3f] w-full rounded-md"
            type="text"
            placeholder="Income Title"
            ref={title}
          />
          <input
            className="p-3 placeholder-slate-300 border-[2px] border-slate-200 bg-[#3b3c3f] w-full rounded-md mt-2"
            type="number"
            placeholder="Income Amount"
            ref={amount}
          />
          <input
            className="p-3 placeholder-slate-300 border-[2px] border-slate-200 bg-[#3b3c3f] w-full rounded-md mt-2"
            type="date"
            placeholder="Income Date"
            ref={date}
          />
          <textarea rows={5}
            className="p-3 placeholder-slate-300 border-[2px] border-slate-200 bg-[#3b3c3f] w-full rounded-md mt-2"
            type="text"
            placeholder="Add A Description"
            ref={description}
          />
          <div className="mt-3 flex justify-center">
            <button type="submit" className="pt-2 pb-2 pl-3 pr-3 bg-purple-600 border-[2px] border-slate-200 rounded-md">Submit</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default IncomeForm;
