import React, {useRef} from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

function Register() {

  const username = useRef();
  const email = useRef();
  const password = useRef();
  const cpassword = useRef();

  const history = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

      if (cpassword.current.value !== password.current.value) {
        cpassword.current.setCustomValidity("Passwords don't match!");
      } else {
        const user = {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value,
        };
        try {
          await axios.post("/api/entry/register", user);
          window.alert("Registered!")
          history("/");
        } catch (err) {
          window.alert("Some Error Occured!")
        }
      }
  };

  return (
    <div className="bg-[#00040f] min-h-screen text-white flex flex-col justify-center sm:p-6 p-2">
    <div className="flex justify-center h-full rounded-md">
      <section className="bg-[#222223] xl:w-1/3 lg:w-1/2 md:w-2/3 sm:w-4/5 w-full rounded-md">
        <div className="w-full flex sm:pt-12 sm:pb-12 pt-8 pb-8 justify-center bg-[#171718] rounded-md">
          <h2 className="font-semibold text-4xl">Register</h2>
        </div>
        <form onSubmit={handleClick} className="bg-[#222225] w-full sm:pl-6 pl-4 sm:pr-6 pr-4 sm:pt-12 pt-8 sm:pb-12 pb-8 rounded-md">
          <input
            className="p-4 placeholder-slate-300 bg-[#00040f] text-xl w-full rounded-md"
            type="text"
            placeholder="Name*"
            ref={username}
          />
          <input
            className="p-4 placeholder-slate-300 bg-[#00040f] text-xl w-full rounded-md mt-4"
            type="email"
            placeholder="Email*"
            ref={email}
          />
          <input
            className="p-4 placeholder-slate-300 bg-[#00040f] text-xl w-full rounded-md mt-4"
            type="password"
            placeholder="Password*"
            ref={password}
          />
          <input
            className="p-4 placeholder-slate-300 bg-[#00040f] text-xl w-full rounded-md mt-4"
            type="password"
            placeholder="Confirm Password*"
            ref={cpassword}
          />
          <div className="flex justify-end w-full mt-3">
              <Link to="/login" className="underline underline-offset-2 hover:text-slate-300 cursor-pointer">Already Have An Account?</Link>
          </div>
          <div className="mt-4 flex justify-center">
            <button type="submit" className="pt-4 pb-4 pl-6 pr-6 bg-gradient-to-r from-slate-800 to-slate-600 border-[2px] border-slate-200 rounded-md sm:text-xl text-lg">
              Register
            </button>
          </div>
        </form>
      </section>
    </div>
  </div>
  )
}

export default Register