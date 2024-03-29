import { FC, useEffect } from "react";
import { ChatMessage, ChatInput, ChatButton, ChatUploadButton } from "./index";
import ChatMessageList from "./ChatMessageList";

type props = {
  open: boolean;
  handleEmitMessage: () => void;
  handleJoin: () => void;
  setMessage: (value: string) => void;
  message: string;
  messageList: object[];
};

const ChatPannel: FC<props> = ({
  open,
  handleEmitMessage,
  handleJoin,
  setMessage,
  message,
  messageList,
}: any) => {
  return (
    <div
      className={`${
        open
          ? `invisible mb-[-50%] transition-all duration-300  opacity-30`
          : "visible mb-[0px] transition-all duration-500"
      } 
              
              w-[360px] bg-white
              flex flex-col border border-slate-400 rounded-md z-20
              
      `}
    >
      <div className=" h-[30px] w-full flex justify-center items-center border-b border-slate-400 rounded-md">
        Чат Clothes
      </div>

      <ChatMessageList>
        {messageList.map((obj: { message: string; id: string }, i: number) => {
          return <ChatMessage _id={obj.id} message={obj.message} key={1 + i} />;
        })}
      </ChatMessageList>
      <div className="w-full border-t-2 border-gray-500 flex justify-center items-center gap-x-2">
        <ChatUploadButton />
        <ChatInput
          open={open}
          placeholder={"Введите сообщение..."}
          setMessage={setMessage}
          message={message}
        />
        <ChatButton handleEmitMessage={handleEmitMessage} />
      </div>
    </div>
  );
};

export default ChatPannel;
