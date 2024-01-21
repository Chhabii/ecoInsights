'use client'
import React from "react";
import Nav from "@/components/navbar/Nav";

const page = () => {
  const taskArray = [
    "plant trees",
    "manage waste properly",
    "Use Electric Appliances",
  ];

  return (
    <>
      <Nav />
      <div className="flex flex-col items-center gap-5 h-[100vh] w-[100vw] mt-[3rem]">
        <div className="w-[80%] ">
          <div className="text-[2rem] mb-[2rem]">
            Take Actions Today Toward Good Impact On Environment:
          </div>
          <div className="flex flex-col gap-y-5 text-white">
            {taskArray.map((task) => {
              return (
                <div className="flex gap-4 w-[90vw] ">
                  <div className="w-[30vw] h-[5vh] bg-[#228B22] px-2 rounded flex items-center">
                    {task}
                  </div>
                  <div className=" ">
                    <button className="px-2 text-[black] bg-[#D8B952] w-[10vw] rounded h-[5vh] transition-all duration-500 hover:bg-[#96C291] hover:text-black">
                      Done
                    </button>
                  </div>
                  {/* <div className='bg-[#FFB996] w-[50vw]'>heloo</div> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
