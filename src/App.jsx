import { useState } from "react";
import Navbar from "./assets/components/navbar";
import Sidebar from "./assets/components/sidebar";
import "./index.css";
import Sales from "./assets/components/sales";
import TopCountries from "./assets/components/topCountries";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <section className="bg-slate-900 h-[100rem] overflow-x-hidden">
        <header>
          <Navbar toggleSidebar={toggleSidebar} isOpen={isOpen} />
        </header>
        <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />
        <div className={`${isOpen ? "translate-x-[18rem]" : ""}`}>
          <Sales isOpen={isOpen} />
          <TopCountries isOpen={isOpen} />
        </div>
      </section>
    </>
  );
}

export default App;
