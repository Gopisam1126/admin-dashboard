import { useState } from "react";
import Navbar from "./assets/components/navbar";
import Sidebar from "./assets/components/sidebar";
import "./index.css";
function App() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <section className="bg-gradient-to-br from-custom-blue to-custom-pink h-[100vh]">
        <header>
          <Navbar toggleSidebar={toggleSidebar} isOpen={isOpen} />
        </header>
        <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />
        <div>
          
        </div>
      </section>
    </>
  );
}

export default App;
