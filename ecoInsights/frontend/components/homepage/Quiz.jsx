import React from "react";
import Image from "next/image";
import Link  from "next/link";

const Quiz = () => {
  return (
    <div className>
      <div className="flex h-[90vh]">
        <div className="w-[50vw]">
          <Image
            className="h-[70vh] w-[40vw] object-cover animate-topdown "
            src="/QUIZ.png"
            height={2000}
            width={2000}/>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 w-[45vw]">
          <div className="text-[#0DAA99] font-bold text-[45px]">
            Do you know about Sustainable Development?
          </div>
          <div className="flex justify-center items-center text-[#3A6625] text-[1.4rem] font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis assumenda ut tempora fugit ducimus impedit facere qui.
            Fuga reiciendis voluptate aspernatur, quasi qui, distinctio laborum
            quos, iste sint a libero.
          </div>
          <div>
            <Link href="/quizpage">
              <button className="bg-[#0DAA99] h-[3.5rem] text-[1.1rem] font-semibold w-[20rem] rounded text-[#DCF2F1] hover:scale-105 transition-all duration-300 hover:bg-[#52872F]">
                Want to take Quiz?
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;