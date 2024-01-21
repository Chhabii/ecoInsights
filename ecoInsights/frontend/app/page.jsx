"use client";
import { useState, useEffect } from "react";
import { setCookie } from "cookies-next";

import Saveworld from "@/components/homepage/Saveworld";
import Nav from "@/components/navbar/Nav";
import axios from "axios";
import SDG from "@/components/homepage/SDG";
import Quiz from "@/components/homepage/Quiz";
import AboutNepal from "@/components/homepage/AboutNepal";

export default function Home() {
  const getUserDetails = async () => {
    try {
      const user = await axios.get("http://localhost:5000/getuser");
      setCookie("userid", user.data[0]._id);
      setCookie("rewardpoint", user.data[0].rewardPoints);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <>
      <div className="w-[100vw] min-h-[100vh] text-white overflow-hidden">
        {/* navdiv   */}
        <Nav />
        <Saveworld />
        <SDG />
        <Quiz />
        <AboutNepal />
        {/* <Tasks /> */}
      </div>
    </>
  );
}
