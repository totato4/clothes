import { FC } from "react";
import { IoMdSend } from "react-icons/io";

type props = {
  handleEmitMessage: () => void;
};

const ChatButton: FC<props> = ({ handleEmitMessage }) => {
  return (
    <button
      onClick={() => handleEmitMessage()}
      className="text-white w-[40px] min-w-[40px] h-[40px] flex justify-center items-center bg-blue-500 rounded-full m-1"
    >
      <div className=" pl-1">
        <IoMdSend size="1.2em" />
      </div>
    </button>
  );
};

export default ChatButton;
