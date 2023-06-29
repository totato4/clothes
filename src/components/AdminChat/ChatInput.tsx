import { ChangeEvent, useEffect, useState } from "react";

const ChatInput = ({ placeholder, setMessage, message, open }: any) => {
  const [inputLength, setInputLength] = useState(false);
  const autoHeight = (e: ChangeEvent<HTMLTextAreaElement>) => {
    // setInputLength(e.target.value.length);
    if (e.target.value.length == 26) {
      setInputLength(false);
    }
    if (e.target.value.length == 28) {
      setInputLength(true);
    }
    setMessage(e.target.value);
  };
  // fixed bag, change minHeight input on close chatPannel
  useEffect(() => {
    setInputLength(false);
    setMessage("");
  }, [open]);

  return (
    <div className="w-full flex items-start justify-center py-1">
      <textarea
        value={message}
        id="ChatInput"
        onChange={(e) => autoHeight(e)}
        placeholder="Введите сообщение..."
        className={`w-full ${
          inputLength ? "h-[85px]" : "h-[50px]"
        } p-3 rounded-md outline-none focus:ring-0 resize-none text-base border-[#bfbfbf] focus:border-[#bfbfbf]`}
        // в css добавил дополнительные стили
      ></textarea>
    </div>
  );
};

export default ChatInput;
