import { useState } from "react";

/* eslint-disable react/prop-types */
const Sales = ({ isOpen }) => {
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
    },
    {
      mainHead: "Expense",
      value: "$82,373.21",
      sign: false,
      perc: "2.4%",
    },
    {
      mainHead: "Total Profit",
      value: "$82,373.21",
      sign: true,
      perc: "5.4%",
    },
  ];

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-3 gap-4 rounded-2xl p-3 bg-transparent relative top-16 ${
        isOpen ? "left-[22rem] w-[70rem]" : "left-[5rem] w-[90rem]"
      } transition-all duration-300 w-90rem bg-slate-600 py-8 px-12`}
    >
      {navList.map((item, index) => (
        <TabButton
          key={index}
          item={item}
          isActive={activeTab === index}
          onClick={() => handleActiveTab(index)}
        />
      ))}
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
          <div className="mb-1 text-lg font-semibold w-fit">
            {item.mainHead}
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
