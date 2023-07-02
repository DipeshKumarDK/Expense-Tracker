import React from 'react'
import pic from "../assets/dollar.png";
import {HiCurrencyRupee} from "react-icons/hi"
import {MdOutlineDateRange} from "react-icons/md"
import {FaCommentDots} from "react-icons/fa"
import {MdDelete} from "react-icons/md"
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function TransactionUnit({title, amount, date, description, id, _id, type}) {

  const navigate= useNavigate()

   const deleteTrans = async (e) => {
      try {
        const res = await axios.delete("/api/transaction/"+_id);
        window.alert("Deleted")
        navigate("/home")
      } catch (err) {
        console.log(err);
      }
    };
  
  return (
    <div className='p-3 bg-[#353638] w-full rounded mt-1 mb-1'>
    <div className='flex'>
            <img src={pic} className='h-14 w-14 rounded-full sm:block hidden'/>
            <div className='sm:ml-4 w-full'>
                <h2 className={`text-xl mt-0.5 ${type==='income'?'text-green-400':'text-red-400'}`}>{title}</h2>
                <div className='flex'>
                   <div className='flex'>
                    <HiCurrencyRupee className='h-4 w-4 mt-1'/>
                    <h3 className={`ml-1 mt-0.5 text-sm ${type==='income'?'text-green-400':'text-red-400'}`}>{amount}</h3>
                   </div>
                   <div className='flex sm:ml-6 ml-3'>
                      <MdOutlineDateRange className='h-4 w-4 mt-1'/>
                      <h3 className={`ml-1 mt-0.5 text-sm ${type==='income'?'text-green-400':'text-red-400'}`}>{(date).slice(0,10)}</h3>
                   </div>
                </div>
            </div>
            <div className='flex flex-col justify-center ml-2'>
            <MdDelete onClick={deleteTrans} className="h-8 w-8 p-1 border-[2px] rounded-full cursor-pointer"/>    
            </div>
      </div>
      <div className='flex mt-1 ml-1'>
      <FaCommentDots className='h-5 w-5 mt-1 text-green-400'/>
        <p className='ml-2 mt-[1px]'>{description}</p>
      </div>
      </div>
  )
}

export default TransactionUnit