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
      {/* <section className="bg-gradient-to-br from-custom-blue to-custom-pink h-[100vh]"> */}
      <section className="bg-slate-900 h-[100vh]">
        <header>
          <Navbar toggleSidebar={toggleSidebar} isOpen={isOpen} />
        </header>
        <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />
        <div>
          <Sales isOpen={isOpen}/>
          {/* <ChartComponent/> */}
        </div>
      </section>
    </>
  );
}

export default App;
