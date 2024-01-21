"use client";
import React, { useState } from "react";
import DisplayDatas from "@/components/datapage/DisplayDatas";
import Suggestion from "@/components/datapage/Suggestion";
import Nav from "@/components/navbar/Nav";
import axios from "axios";

const page = () => {
  const [isLoading, setisLoading] = useState(false);
  const [city, setCity] = useState("");
  const [details, setDetails] = useState([]);
  const [envScore, setenvScore] = useState(null);

  const getData = async () => {
    try {
      setisLoading(true);
      const cityDetails = await axios.get(
        `http://localhost:5000/getcitydetails/${city}`
      );
      const envScore = await axios.get(
        `http://localhost:5000/getprediction/${city}`
      );
      setenvScore(envScore.data);
      setDetails(cityDetails.data);
      setisLoading(false);
    } catch (error) {
      setisLoading(false);
      console.log({
        message: "error getting city details!",
        error,
      });
    }
    setCity("");
  };
  return (
    <>
      <Nav />
      <div>
        {/* input area and button*/}
        <div className="flex gap-4 justify-center mt-10">
          <input
            type="text"
            placeholder="Enter your city..."
            value={city}
            onChange={(event) => {
              setCity(event.target.value);
            }}
            className="focus:border-slate-500 focus:outline-none text-black px-2 text-[1.2rem] border-2 rounded-lg border-slate-300 w-[95vw] sm:w-[25rem] h-[3rem]"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                getData();
              }
            }}
          />
          <button
            className="w-[10rem] h-[3rem] bg-slate-300 text-black text-[1.2rem] rounded transition-all duration-500 hover:bg-green-500 hover:text-white"
            onClick={getData}
          >
            Get Data
          </button>
        </div>
        <DisplayDatas details={details} envScore={envScore} isLoading={isLoading} />
        {envScore ? <Suggestion envScore={envScore} /> : null}
      </div>
    </>
  );
};

export default page;
