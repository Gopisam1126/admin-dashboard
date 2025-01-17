import { useState } from "react";
import Navbar from "./assets/components/navbar";
import Sidebar from "./assets/components/sidebar";
import "./index.css";
import Sales from "./assets/components/sales";
import TopCountries from "./assets/components/topCountries";
import RecentOrders from "./assets/components/recentProjects";
import NewUsersChart from "./assets/components/newUsersChart";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  const ExpenceData = [
    100, 400, 200, 300, 345, 400, 450, 300, 350, 400, 380, 600,
  ];

  return (
    <>
      <section className="bg-slate-900 h-[150rem] overflow-hidden">
        <header>
          <Navbar toggleSidebar={toggleSidebar} isOpen={isOpen} />
        </header>
        <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />
        <div className={`${isOpen ? "translate-x-[18rem]" : ""}`}>
          <Sales isOpen={isOpen} />
          <RecentOrders isOpen={isOpen}/>
          <TopCountries isOpen={isOpen} />
          <NewUsersChart ExpenceData={ExpenceData}/>
        </div>
      </section>
    </>
  );
}

export default App;
