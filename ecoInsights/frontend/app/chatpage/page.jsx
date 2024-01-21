"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { LineWave } from "react-loader-spinner";
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from "next/link";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [currentMessage, setcurrentMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: newMessage, sender: "user" },
    ]);
    setNewMessage("");
    setIsLoading(true); // Set loading state to true
    getBotMessage();
  };

  const getBotMessage = async () => {
    try {
      const response = await axios.post(`http://192.168.18.44:8000/api/chat/`, {
        user_msg: currentMessage,
      });
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: response.data.answer, sender: "bot" },
      ]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false); // Reset loading state after response or error
    }
  };

  return (
    <div className="flex flex-col h-screen w-[80vw] m-auto bg-slate-200">
      <Link href="/">
        <IoMdArrowRoundBack className="cursor-pointer text-[4rem] absolute top-[1rem] left-2" />
      </Link>
      <div className="h-[3rem] flex justify-center items-center text-[2rem] font-semibold bg-slate-700 text-white">
        Eco-Chat
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-2 flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }  `}
          >
            <div
              className={`w-fit px-3 py-2 rounded-xl 
            ${message.sender === "user" ? "bg-green-400" : "bg-blue-300"} 
            `}
            >
              {message.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <LineWave
            visible={true}
            height="80"
            width="80"
            color="#93c5fd"
            ariaLabel="line-wave-loading"
            wrapperStyle={{}}
            wrapperClass=""
            firstLineColor=""
            middleLineColor=""
            lastLineColor=""
          />
        )}
      </div>
      <div className="flex items-center p-4">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 p-2 mr-2 rounded border border-slate-300 focus:border-slate-700"
          value={newMessage}
          onChange={(e) => {
            setNewMessage(e.target.value);
            setcurrentMessage(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSendMessage();
            }
          }}
        />
        <button
          onClick={() => {
            handleSendMessage();
            // getBotMessage();
          }}
          className="p-2 bg-slate-700 text-white rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
