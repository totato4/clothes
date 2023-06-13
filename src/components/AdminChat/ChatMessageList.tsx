import { FC, ReactNode } from "react";

type props = {
  children: ReactNode;
};

const ChatMessageList: FC<props> = ({ children }) => {
  return (
    <div className="h-[450px] overflow-scroll overflow-x-hidden flex flex-col gap-y-2">
      {children}
    </div>
  );
};

export default ChatMessageList;
