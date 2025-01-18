/* eslint-disable react/prop-types */
import { useState } from "react";

const TopCountries = ({ isOpen }) => {
  const [hoveredPoint, setHoveredPoint] = useState(null);

  // Raw data
  const pointsDataRaw = [
    {
      name: "United States",
      top: "40%",
      left: "20%",
      color: "bg-blue-500",
      value: 15,
    },
    {
      name: "Brazil",
      top: "65%",
      left: "30%",
      color: "bg-green-500",
      value: 10,
    },
    {
      name: "India",
      top: "48%",
      left: "65.5%",
      color: "bg-orange-500",
      value: 20,
    },
  ];

  const maxValue = 25;
  const pointsData = pointsDataRaw.map((point) => ({
    ...point,
    percentage: (point.value / maxValue) * 100,
    width: `${(point.value / maxValue) * 100}%`,
  }));

  const CountryPoint = ({ point }) => {
    const markerClass = `absolute w-4 h-4 rounded-full cursor-pointer ${
      point.color
    } ${
      hoveredPoint === point.name ? "ring-4 ring-white" : "opacity-80"
    } transition-all duration-200`;

    return (
      <div
        className={markerClass}
        style={{ top: point.top, left: point.left }}
        onMouseEnter={() => setHoveredPoint(point.name)}
        onMouseLeave={() => setHoveredPoint(null)}
        title={point.name}
      ></div>
    );
  };

  const CountryBar = ({ point }) => (
    <li className={`list-none bg-slate-900 mt-5 py-3 px-4 rounded-lg text-xl ${hoveredPoint === point.name ? "bg-custom-bar-hover" : ""}`}>
      {point.name}
      <span className="text-lg ml-2">({point.percentage.toFixed(2)}%)</span>
      <div className="bg-slate-800 w-[25rem] h-3 mt-1 rounded">
        <div
          className="bg-slate-500 h-3 rounded-md"
          style={{ width: point.width }}
        ></div>
      </div>
    </li>
  );

  return (
    <section className="text-slate-50">
      <div className={`mx-24 transition-all duration-500 relative top-56`}>
        <h1 className="text-3xl">Top Countries</h1>
      </div>

      <div
        className={` mx-24 mt-14 relative top-56 bg-slate-950 rounded-2xl shadow-lg flex ${
          isOpen ? "w-[65rem]" : ""
        } transition-all duration-500`}
      >
        <div className="relative top-5 w-[40rem] h-[23rem]">
          <img
            src="/images/World-Map-white-2048x1171-removebg-preview.png"
            alt="World map"
            className="w-full h-full py-5 object-fill opacity-30"
          />
          {pointsData.map((point, i) => (
            <CountryPoint key={i} point={point} />
          ))}
        </div>

        <div
          className={`z-50 text-slate-50 relative left-16 ${
            isOpen ? "-translate-x-[5rem]" : ""
          } transition-all duration-500`}
        >
          {pointsData.map((point, i) => (
            <CountryBar key={i} point={point} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCountries;
