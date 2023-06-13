import React from "react";

const AdminPannelUser = () => {
  const active = false;
  return (
    <div>
      <button
        className={`${
          active && "bg-green-400"
        } border-gray-400 p-[2px] border rounded-md  `}
      >
        User4545@mail.ru
      </button>
    </div>
  );
};

export default AdminPannelUser;
