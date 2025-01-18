/* eslint-disable react/prop-types */
import NewUsersChart from "./charts/traffic/newUsersChart";
import ActiveSessions from "./charts/traffic/sessionChart";
import NumberOfVisitos from "./charts/traffic/visitorChart";

const PageStatus = ({ isOpen, ExpenceData, IncomeData, TotalProfit }) => {
  const gridItems = [
    {
      head: "New Users",
      value: 200,
      chartType: "NewUsers",
    },
    {
      head: "Active Sessions",
      value: 74,
      chartType: "ActiveSessions",
    },
    {
      head: "Views",
      value: 328,
      chartType: "NumberOfVisitos",
    },
  ];

  const renderChart = (chartType, props) => {
    switch (chartType) {
      case "NewUsers":
        return <NewUsersChart ExpenceData={props.ExpenceData || []} />;
      case "ActiveSessions":
        return <ActiveSessions IncomeData={props.IncomeData || []} />;
      case "NumberOfVisitos":
        return <NumberOfVisitos TotalProfit={props.TotalProfit || []} />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`relative top-32 ${
        isOpen ? "w-[calc(100%-30rem)] ml-20" : "mx-24"
      } transition-all duration-500 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 text-slate-50`}
    >
      {gridItems.map((item, i) => (
        <div
          className="relative bg-slate-800 rounded-2xl w-full h-64 p-4 flex items-center justify-center"
          key={i}
        >
          <h1 className="absolute top-4 left-4 text-lg underline">
            {item.head}
          </h1>
          <span className="absolute top-12 left-4 text-3xl font-bold">
            {item.value}
          </span>
          {renderChart(item.chartType, {
            ExpenceData,
            IncomeData,
            TotalProfit,
          })}
        </div>
      ))}
    </div>
  );
};

export default PageStatus;
