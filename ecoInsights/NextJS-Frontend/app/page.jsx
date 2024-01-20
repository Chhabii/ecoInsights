"use client";
import { useState } from "react";

import Saveworld from "@/components/homepage/Saveworld"
import Nav from "@/components/navbar/Nav";
import axios from "axios";

export default function Home() {



  return (
    <>
      <div className="w-[100vw] min-h-[100vh] text-white overflow-hidden">
        {/* navdiv   */}
        <Nav />
        <Saveworld />
        {/* <Tasks /> */}
      </div>
    </>
  );
}
