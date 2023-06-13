import React from "react";
import { AdminPannelUser } from "./index";

const AdminPannel = () => {
  return (
    <div className="flex">
      <div className="flex flex-col bg-white px-2 gap-y-2 rounded-tl-md rounded-bl-md">
        <AdminPannelUser />
        <AdminPannelUser />
        <AdminPannelUser />
        <AdminPannelUser />
        <AdminPannelUser />
      </div>
    </div>
  );
};

export default AdminPannel;
