import { useState } from "react";
import Navbar from "./assets/components/navbar";
import Sidebar from "./assets/components/sidebar";
import "./index.css";
import Sales from "./assets/components/sales";
import TopCountries from "./assets/components/topCountries";
import RecentOrders from "./assets/components/recentProjects";
import PageStatus from "./assets/components/pageStat";
import ProjectStatus from "./assets/components/projectStatus";
import DeviceUsageChart from "./assets/components/charts/traffic/devicesStat";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

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
      <section className="bg-slate-900 h-[200rem] overflow-hidden">
        <header>
          <Navbar toggleSidebar={toggleSidebar} isOpen={isOpen} />
        </header>
        <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />
        <div className={`${isOpen ? "translate-x-[18rem]" : ""}`}>
          <Sales
            isOpen={isOpen}
            IncomeData={IncomeData}
            ExpenceData={ExpenceData}
            TotalProfit={TotalProfit}
          />
          <ProjectStatus isOpen={isOpen} />
          <RecentOrders isOpen={isOpen} />
          <PageStatus
            ExpenceData={ExpenceData}
            IncomeData={IncomeData}
            TotalProfit={TotalProfit}
            isOpen={isOpen}
          />
          <TopCountries isOpen={isOpen} />
          <div className="relative top-80 text-slate-50 mx-24">
            <h1 className="w-fit text-3xl">Session Devices</h1>
            <DeviceUsageChart isOpen={isOpen} />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
