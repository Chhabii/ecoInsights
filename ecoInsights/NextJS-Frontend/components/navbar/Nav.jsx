import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const Nav = () => {
  const [currentState, setCurrentState] = useState(0);
  return (
    <div className="w-full h-[8vh] bg-[#0DAA99]  flex items-center px-10 text-center justify-between">
      <div className="flex items-center text-center font-bold">
        <p className=" italic text-[20px]">eco</p>
        <span className="font-medium text-[30px]">i</span>
        <span className="text-[25px] text-[#3b3d05]">nsight</span>
      </div>
      <div
        className="cursor-pointer md:hidden"
        onClick={() => {
          setCurrentState(!currentState);
        }}
      >
        <AiOutlineMenu size={25} />
      </div>
      <div className=" hidden md:flex ">
        <div className="group">
          <div className="p-3 font-medium text-[#3b3c05] text-[1.2rem] cursor-pointer   ">
            Home
          </div>
          <div className="h-[4px] bg-white w-[0%] group-hover:w-[100%]  transition-all duration-300"></div>
        </div>
        <div className="group">
          <Link href="/insightpage">
            <div className="p-3 font-medium text-[#3b3c05] text-[1.2rem] cursor-pointer   ">
              Insight Your City
            </div>
          </Link>
          <div className="h-[4px] bg-white w-[0%] group-hover:w-[100%]  transition-all duration-300"></div>
        </div>
        <div className="group">
          <div className="p-3 font-medium text-[#3b3c05] text-[1.2rem] cursor-pointer   ">
            17s SDG
          </div>
          <div className="h-[4px] bg-white w-[0%] group-hover:w-[100%]  transition-all duration-300"></div>
        </div>
        <div className="group">
          <div className="p-3 font-medium text-[#3b3c05] text-[1.2rem] cursor-pointer ">
            Articles
          </div>
          <div className="h-[4px] bg-white w-[0%] group-hover:w-[100%]  transition-all duration-300"></div>
        </div>
        <div className="group">
          <div className="p-3 font-medium text-[#3b3c05] text-[1.2rem] cursor-pointer   ">
            Take Quiz
          </div>
          <div className="h-[4px] bg-white w-[0%] group-hover:w-[100%]  transition-all duration-300"></div>
        </div>
        <div className="group">
          <div className="p-3 font-medium text-[#3b3c05] text-[1.2rem] cursor-pointer   ">
            Chat Health
          </div>
          <div className="h-[4px] bg-white w-[0%] group-hover:w-[100%]  transition-all duration-300"></div>
        </div>
      </div>
      {currentState ? (
        <div
          className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0"
          onClick={() => {
            setCurrentState(!currentState);
          }}
        ></div>
      ) : (
        ""
      )}
      <div
        className={
          currentState
            ? "fixed top-0 right-0 w-[300px] h-screen bg-[#0DAA99] z-10 duration-300"
            : "fixed top-0 right-[-100%] w-[300px] h-screen bg-[#0DAA99] z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => {
            setCurrentState(!currentState);
          }}
          size={25}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <nav>
          <ul className="flex flex-col p-4 text-gray-900 items-center">
            <li className="text-xl py-4 flex cursor-pointer hover:border-[#6b6910] hover:border-b-4">
              Home
            </li>
            <Link href="/insightpage">
              <li className="text-xl py-4 flex cursor-pointer hover:border-[#6b6910] hover:border-b-4">
                Insight your City
              </li>
            </Link>
            <li className="text-xl py-4 flex cursor-pointer hover:border-[#6b6910] hover:border-b-4">
              17s SDG
            </li>
            <li className="text-xl py-4 flex cursor-pointer hover:border-[#6b6910] hover:border-b-4">
              Articles
            </li>
            <li className="text-xl py-4 flex cursor-pointer hover:border-[#6b6910] hover:border-b-4">
              Take Quiz
            </li>
            <li className="text-xl py-4 flex cursor-pointer hover:border-[#6b6910] hover:border-b-4">
              Chat Health
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
