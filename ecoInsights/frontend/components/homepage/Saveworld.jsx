import React from "react";
import Image from "next/image";
import Link  from "next/link";

const Saveworld = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-[50vw]">
          <Image
            className="h-[90vh] w-[40vw] object-cover animate-leftright"
            src="/saveworld.png"
            height={2000}
            width={2000}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-10 w-[45vw]">
          <div className="text-[#0DAA99] font-bold text-[50px]">
            Insight into your city!
          </div>
          <div className="flex justify-center items-center text-[#3A6625] text-[1.4rem] font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis assumenda ut tempora fugit ducimus impedit facere qui.
            Fuga reiciendis voluptate aspernatur, quasi qui, distinctio laborum
            quos, iste sint a libero.
          </div>
          <div>
            <Link href="/insightpage">
              <button className="bg-[#0DAA99] h-[3.5rem] text-[1.1rem] font-semibold w-[20vw] rounded text-[#DCF2F1] hover:scale-105 transition-all duration-300 hover:bg-[#52872F]">
                Want to have insight about your city?
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Saveworld;
