import { useState } from "react";
import Navbar from "./assets/components/navbar";
import Sidebar from "./assets/components/sidebar";
// import ChartComponent from "./assets/components/chartComponent"
import "./index.css";
import Sales from "./assets/components/sales";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <section className="bg-slate-900 h-screen overflow-x-hidden">
        <header>
          <Navbar toggleSidebar={toggleSidebar} isOpen={isOpen} />
        </header>
        <div>
          <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />
          <Sales isOpen={isOpen} />
        </div>
      </section>
    </>
  );
}

export default App;
