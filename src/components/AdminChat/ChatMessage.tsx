import React, { FC } from "react";
import { useAppSelector } from "../../RTK/store";

type props = {
  message: string;
  _id: string;
  time?: string;
  name?: string;
};

const ChatMessage: FC<props> = ({ message, _id, time, name }) => {
  const yourId = useAppSelector((state) => state.authSlice._id);
  return (
    <div
      className={`bg-white p-[5px]  text-xs flex ${
        _id == yourId && "flex-row-reverse"
      }  gap-x-2`}
    >
      <div
        className={`h-[40px] w-[40px] min-w-[40px] flex justify-center items-center rounded-full  ${
          _id == yourId ? "bg-orange-400" : "bg-green-600"
        } my-auto`}
      >
        <div className=" text-center flex items-center justify-center">img</div>
      </div>
      <div className="flex flex-col">
        <div className="bg-[#f2f2f2] p-2 break-words w-full wrap">
          {message}
        </div>
        <div className="pl-2 pt-1">14:02</div>
      </div>
    </div>
  );
};

export default ChatMessage;
