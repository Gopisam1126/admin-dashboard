/* eslint-disable react/prop-types */
import React from "react";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ChecklistIcon from "@mui/icons-material/Checklist";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

const ProjectStatus = ({ isOpen }) => {
  const proStatItems = [
    {
      statHead: "Open",
      value: 54,
      icon: React.createElement(NotificationsActiveIcon, {
        style: {
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
      statHead: "Closed",
      value: 148,
      icon: React.createElement(ChecklistIcon, {
        style: {
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
      statHead: "Dropped",
      value: 4,
      icon: React.createElement(HighlightOffIcon, {
        style: {
          color: "#000",
          backgroundColor: "#E9D5FF",
          padding: "8px",
          height: "3rem",
          width: "3rem",
          borderRadius: "50%",
        },
      }),
    },
    {
      statHead: "High Priority",
      value: 11,
      icon: React.createElement(PriorityHighIcon, {
        style: {
          position: "relative",
          color: "#000",
          backgroundColor: "#F3CDE0",
          padding: "8px",
          height: "3rem",
          width: "3rem",
          borderRadius: "50%",
        },
      }),
    },
  ];
  return (
    <div className="relative mx-24 top-44 text-slate-50 ">
      <h1 className="text-3xl translate-x-5">Project Status</h1>
      <div
        className={`${isOpen ? "lg:grid-cols-2 w-[60rem]" : "lg:grid-cols-4"} transition-all duration-500 grid grid-cols-1 gap-4 p-4 text-slate-50`}
      >
        {proStatItems.map((item, i) => (
          <div
            className="relative bg-slate-800 rounded-2xl shadow-xl- w-full h-48 p-4 flex items-center justify-center"
            key={i}
          >
            <h1 className="absolute top-4 left-20 text-2xl">{item.statHead}</h1>
            <span className="absolute top-20 left-1/2 transform -translate-x-1/2 text-5xl font-bold">
              {item.value}
            </span>
            <div className="absolute top-2 left-3">{item.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectStatus;
