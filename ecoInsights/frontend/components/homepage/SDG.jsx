"use client";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const SDG = () => {
    const sdgArray = [
        {
            name: "NO POVERTY",
            color: "bg-[#E5243B]",
        },
        {
            name: "ZERO HUNGER",
            color: "bg-[#DDA63A]",
        },
        {
            name: "GOOD HEALTH AND WELL BEING",
            color: "bg-[#4C9F38]",
        },
        {
            name: "QUALITY EDUCATION",
            color: "bg-[#C5192D]",
        },
        {
            name: "GENDER EQUALITY",
            color: "bg-[#FF3A21]",
        },
        {
            name: "CLEAN WATER AND SANITATION",
            color: "bg-[#26BDE2]",
        },
        {
            name: "AFFORDABLE AND CLEAN ENERGY",
            color: "bg-[#FCC30B]",
        },
        {
            name: "DECENT WORK AND ECONOMIC GROWTH",
            color: "bg-[#A21942]",
        },
        {
            name: "INDUSTRY, INNOVATION AND INFRASTRUCTURE",
            color: "bg-[#FD6925]",
        },
        {
            name: "REDUCED INEQUALITIES",
            color: "bg-[#DD1367]",
        },
        {
            name: "SUSTAINABLE CITIES AND COMMUNITIES",
            color: "bg-[#FD9D24]",
        },
        {
            name: "RESPONSIBLE CONSUMPTION AND PRODUCTION",
            color: "bg-[#BF8B2E]",
        },
        {
            name: "CLIMATE ACTION",
            color: "bg-[#3F7E44]",
        },
        {
            name: "LIFE BELOW WATER",
            color: "bg-[#0A97D9]",
        },
        {
            name: "LIFE ON LAND",
            color: "bg-[#56C02B]",
        },
        {
            name: "PEACE, JUSTICE AND STRONG INSTITUTIONS",
            color: "bg-[#00689D]",
        },
        {
            name: "PARTNERSHIPS FOR THE GOALS",
            color: "bg-[#19486A]",
        },
    ];
    useEffect(() => {
        Aos.init({
            easing: "ease-out-cubic",
            once: false,
            offset: 50,
            duration: 1000,
        });
    }, []);
    return (
        <div className=" w-full overflow-hidden py-20">
            <h1 className="text-[#0DAA99] text-center text-[50px] font-bold">UN's 17 Sustainable Development Goals</h1>
            {sdgArray.map((goal, index) => {
                return (
                    <div
                        key={index}
                        data-aos={`${
                            (index + 1) % 2 === 0 ? "fade-right" : "fade-left"
                        }`}
                        className={` flex h-[10vh] w-[100vw] gap-4 mt-4 ${
                            (index + 1) % 2 === 0
                                ? "justify-end"
                                : "justify-start"
                        } px-40`}
                    >
                        <div
                            className={` ${goal.color} w-[30vw] h-[20vh] flex  gap-8 text-white font-bold text-xl `}
                        >
                            <div className="font-bold text-2xl flex items-center ml-10">
                                {index + 1}
                            </div>

                            <div className="flex justify-center  items-center ">
                                {goal.name}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
export default SDG;