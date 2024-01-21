import React from "react";

const Suggestion = ({envScore}) => {
  return (
    <div className=" flex justify-center mt-[5rem] ">
      <div className="w-[80%] flex flex-col gap-4 ">
        <div className="">
          <div className="w-[14rem] py-[.5rem]  rounded font-semibold text-[2.4rem]"
          >Category:{envScore?.category}</div>
          <div className="w-[14rem] py-[.5rem]  rounded font-semibold text-[2.4rem]"
          >Suggestions:</div>
        </div>
        <div className="text-[1.3rem]">
            {envScore?.suggestions}
        </div>
      </div>
    </div>
  );
};

export default Suggestion;
