import React from "react";
import Topbar from "../components/Topbar";
import Sales from "../components/Dashboard/Sales";
import Purchase from "../components/Dashboard/Purchase";
import Sales_Charts from "../components/Dashboard/Sales_Charts";

const Dashboard = () => {
  return (
    <div className="bg-gray-100 h-full">
      <Topbar />
      <div className="flex flex-row justify-between p-10 gap-x-10">
        <Sales />
        <Purchase />
      </div>
      <div className="flex flex-row justify-center p-10 bg-white mx-10 rounded-2xl">
        <Sales_Charts />
      </div>
    </div>
  );
};

export default Dashboard;
