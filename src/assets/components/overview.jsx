/* eslint-disable react/prop-types */
// import Navbar from "./assets/components/navbar";
import Sales from "./sales";
import TopCountries from "./topCountries";
import RecentOrders from "./recentProjects";
import PageStatus from "./pageStat";
import ProjectStatus from "./projectStatus";
import DeviceUsageChart from "./charts/traffic/devicesStat";
import BrowserStat from "./browserStat";
import AgeGroup from "./charts/traffic/ageGroup";
function Overview({isOpen}) {

  const IncomeData = [
    200, 300, 250, 400, 342, 380, 420, 500, 450, 400, 380, 600,
  ];
  const ExpenceData = [
    100, 400, 200, 300, 345, 400, 450, 300, 350, 400, 380, 600,
  ];

  const TotalProfit = IncomeData.map(
    (income, index) => income - ExpenceData[index]
  );

  return (
    <>
      <section className="bg-slate-900 h-[220rem] overflow-hidden">
        <div className={`${isOpen ? "translate-x-[18rem]" : ""}`}>
          <Sales
            isOpen={isOpen}
            IncomeData={IncomeData}
            ExpenceData={ExpenceData}
            TotalProfit={TotalProfit}
          />
          <ProjectStatus isOpen={isOpen} />
          <RecentOrders isOpen={isOpen} />
          <div className="text-slate-50 mx-24 relative top-56">
            <h1 className="text-3xl">User Statistics</h1>
            <PageStatus
              ExpenceData={ExpenceData}
              IncomeData={IncomeData}
              TotalProfit={TotalProfit}
              isOpen={isOpen}
            />
          </div>
          <div
            className={`relative top-80 text-slate-50 mx-24 grid ${
              isOpen ? "grid-cols-2" : "grid-cols-2"
            }`}
          >
            <div
              className={`bg-slate-800 h-[40rem] ${
                isOpen ? "w-[30rem]" : ""
              } px-10 py-5 rounded-lg`}
            >
              <h1 className="w-fit text-3xl">Session Devices</h1>
              <DeviceUsageChart isOpen={isOpen} />
            </div>
            <div
              className={`mx-24 bg-slate-800 h-[25rem] ${
                isOpen ? "w-[30rem] -translate-x-[10rem]" : ""
              } px-10 py-5`}
            >
              <h1 className="w-fit text-3xl">Browser Statistics</h1>
              <BrowserStat isOpen={isOpen} />
            </div>
          </div>
          <div
            className={`relative top-[6rem] left-[47.5rem] mx-24 bg-slate-800 w-[29.5rem] h-[25rem] px-10 py-5 text-slate-50 rounded-lg ${
              isOpen ? "w-[30rem] -translate-x-[10rem]" : ""
            }`}
          >
            <h1 className="w-fit text-3xl">Age Statistics</h1>
            <AgeGroup isOpen={isOpen} />
          </div>
        </div>
        <TopCountries isOpen={isOpen} />
      </section>
    </>
  );
}

export default Overview;
