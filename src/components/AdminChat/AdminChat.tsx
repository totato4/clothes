import { createPortal } from "react-dom";
import { useEffect, useMemo, useState } from "react";
import { ShowButton, ChatPannel, AdminPannel } from "./index";

import { io } from "socket.io-client";
import { useAppSelector } from "../../RTK/store";
import axios from "axios";

const AdminChat = (props: any) => {
  // @ts-ignore
  const socket = io.connect("http://localhost:3001/");

  // global State

  const { _id, accessToken, role, email } = useAppSelector(
    (state) => state.authSlice
  );

  //  // //

  const modalRootElement = document.querySelector("#modal");
  const [open, isOpen] = useState(true);
  const handleJoin = () => {
    socket.emit("join", { room: _id });
    console.log(_id);
    isOpen(!open);
  };
  const { marker } = props;
  const element = useMemo(() => {
    const element = document.createElement("div");
    element.dataset.marker = marker;
    return element;
  }, [marker]);
  useEffect(() => {
    modalRootElement?.appendChild(element);

    return () => {
      modalRootElement?.removeChild(element);
    };
  }, [element]);

  // controlled input value

  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState<any>([]);

  //  socket CRUD

  useEffect(() => {
    socket.emit("join", { accessToken, id: _id, room: _id, email, role });
  }, []);
  socket.on("message", ({ data }: any) => {
    setMessageList((_state: string[]) => [..._state, data]);
  });
  const handleEmitMessage = () => {
    socket.emit("sendMessage", { message, id: _id, room: _id, role });
    setMessageList((_state: string[]) => [
      ..._state,
      { message, id: _id, room: _id, name: "Вы" },
    ]);
    setMessage("");
    console.log(messageList);
  };

  // socket ADMIN LOGIC
  const [isLoading, setIsLoading] = useState(false);
  const [userList, setUserList] = useState();

  useEffect(() => {
    const fetchItem = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(`http://localhost:3001/chatUsers`);
        setIsLoading(false);
        setUserList(data);

        console.log(data);
      } catch (error) {
        alert("ошибка при загрузке страницы");
        setIsLoading(false);
      }
    };
    role == "admin" && fetchItem();
  }, []);

  return createPortal(
    <div
      className="fixed bottom-[10%] right-[5%] z-50
    flex flex-col items-end gap-y-4
    "
    >
      <div className="flex">
        {role === "admin" && <AdminPannel />}
        <ChatPannel
          open={open}
          handleEmitMessage={handleEmitMessage}
          handleJoin={handleJoin}
          setMessage={setMessage}
          message={message}
          messageList={messageList}
        />
      </div>
      <ShowButton open={open} handleClick={() => handleJoin()} />
    </div>,
    element
  );
};

export default AdminChat;
