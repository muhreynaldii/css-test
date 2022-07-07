import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-screen w-full overflow-hidden bg-[#2A2E43]">
      <div className="mx-auto my-12 flex h-[346px] w-[251px] flex-col self-center rounded-md bg-[#FFFDFDCF] p-10 shadow-lg">
        <h1 className="text-center text-2xl text-black">Login</h1>
        <form className="flex flex-col justify-center space-y-2 pt-4">
          <label htmlFor="username" className="py-1">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="bg-grey-custom h-[33px] rounded-sm"
          />
          <label htmlFor="password" className="py-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="bg-grey-custom h-[33px] rounded-sm"
          />

          <div className="mt-14 flex justify-between">
            <Link to="/news">
              <button className="w-[70px] bg-green-500 px-3 py-2 text-base font-normal text-white">
                Login
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
