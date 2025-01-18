/* eslint-disable react/prop-types */
import NewUsersChart from "./newUsersChart";
import ActiveSessions from "./sessionChart";
import NumberOfVisitos from "./visitorChart";

const PageStatus = ({ isOpen, ExpenceData, IncomeData, TotalProfit }) => {
  return (
    <div
      className={`relative top-32 ${
        isOpen ? "w-[calc(100%-30rem)] ml-20" : "mx-24"
      } transition-all duration-500 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 text-slate-50`}
    >
      <div className="relative bg-slate-800 rounded-2xl w-full h-64 p-4 flex items-center justify-center">
        <h1 className="absolute top-4 left-4 text-lg underline">New Users</h1>
        <span className="absolute top-12 left-4 text-3xl font-bold">200</span>
        <NewUsersChart ExpenceData={ExpenceData} />
      </div>

      <div className="relative bg-slate-800 rounded-2xl w-full h-64 p-4 flex items-center justify-center">
        <h1 className="absolute top-4 left-4 text-lg underline">
          Active Sessions
        </h1>
        <span className="absolute top-12 left-4 text-3xl font-bold">74</span>
        <ActiveSessions IncomeData={IncomeData} />
      </div>

      <div className="relative bg-slate-800 rounded-2xl w-full h-64 p-4 flex items-center justify-center">
        <h1 className="absolute top-4 left-4 text-lg underline">Views</h1>
        <span className="absolute top-12 left-4 text-3xl font-bold">328</span>
        <NumberOfVisitos TotalProfit={TotalProfit} />
      </div>
    </div>
  );
};

export default PageStatus;
