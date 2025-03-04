import { useState } from "react";
import IncomeChart from "./charts/sales/incomeChart";
import ExpencesChart from "./charts/sales/expencesChart";
import TpChart from "./charts/sales/tpChart";
import React from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SavingsIcon from "@mui/icons-material/Savings";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
/* eslint-disable react/prop-types */
const Sales = ({ isOpen, IncomeData, ExpenceData, TotalProfit }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleActiveTab = (index) => {
    setActiveTab(index);
  };

  const navList = [
    {
      mainHead: "Income",
      value: "$82,373.21",
      sign: true,
      perc: "3.4%",
      icon: React.createElement(SavingsIcon, {
        style: {
          position: "relative",
          left: `${isOpen ? "10rem" : "17rem"}`,
          color: "#000",
          backgroundColor: "#BAE6FD",
          padding: "8px",
          height: "3rem",
          width: "3rem",
          borderRadius: "50%",
        },
      }),
    },
    {
      mainHead: "Expense",
      value: "$82,373.21",
      sign: false,
      perc: "2.4%",
      icon: React.createElement(AccountBalanceWalletIcon, {
        style: {
          position: "relative",
          left: `${isOpen ? "10rem" : "17rem"}`,
          color: "#000",
          backgroundColor: "#A7F3D0",
          padding: "8px",
          height: "3rem",
          width: "3rem",
          borderRadius: "50%",
        },
      }),
    },
    {
      mainHead: "Total Profit",
      value: "$82,373.21",
      sign: true,
      perc: "5.4%",
      icon: React.createElement(AttachMoneyIcon, {
        style: {
          position: "relative",
          left: `${isOpen ? "10rem" : "15.5rem"}`,
          color: "#000",
          backgroundColor: "#E9D5FF",
          padding: "8px",
          height: "3rem",
          width: "3rem",
          borderRadius: "50%",
        },
      }),
    },
  ];

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-3 gap-4 rounded-2xl p-3 bg-transparent relative top-16 ${
        isOpen ? "w-[70rem]" : "w-[90rem]"
      } left-[5rem] transition-all duration-300 w-90rem bg-slate-600 py-8 px-12`}
    >
      {navList.map((item, index) => (
        <TabButton
          key={index}
          item={item}
          isActive={activeTab === index}
          onClick={() => handleActiveTab(index)}
        />
      ))}
      <div className={`${isOpen ? "w-[50rem]" : "w-[70rem]"}`}>
        {activeTab === 0 ? (
          <IncomeChart isOpen={isOpen} IncomeData={IncomeData} />
        ) : activeTab === 1 ? (
          <ExpencesChart isOpen={isOpen} ExpenceData={ExpenceData} />
        ) : activeTab === 2 ? (
          <TpChart isOpen={isOpen} TotalProfit={TotalProfit} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

const TabButton = ({ item, isActive, onClick }) => {
  return (
    <button
      className={`p-4 rounded-2xl cursor-pointer transition duration-150 outline-none ${
        isActive ? "bg-gray-900 shadow-lg" : "bg-slate-700"
      } text-slate-50 h-[10rem]`}
      onClick={onClick}
    >
      <div className="flex md:flex-col-reverse gap-2 2xl:flex-row justify-between relative">
        <div>
          <div className="flex items-center mb-1 text-lg font-semibold w-fit">
            {item.mainHead}
            <div className="relative -top-2">{item.icon}</div>
          </div>
          <h3 className="mb-1 w-fit">
            <span>{item.value}</span>
          </h3>
          <div className="inline-flex items-center flex-wrap gap-1">
            <span
              className={`flex items-center text-success font-bold ${
                item.sign ? "text-green-600" : "text-red-600"
              }`}
            >
              <span>{item.sign ? "+" : "-"}</span>
              <span>{item.perc}</span>
            </span>
            <span>from last month</span>
          </div>
        </div>
      </div>
    </button>
  );
};

export default Sales;
