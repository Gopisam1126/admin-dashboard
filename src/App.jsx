import "./index.css";
import { useState } from "react";
import Overview from "./assets/components/overview";
import Navbar from "./assets/components/navbar";
import Sidebar from "./assets/components/sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./assets/pages/projects";
import Marketing from "./assets/pages/marketing";
import Statistics from "./assets/pages/statistics";
import Sales from "./assets/pages/sales";
import Issues from "./assets/pages/issues";
import Users from "./assets/pages/users";
import Inventory from "./assets/pages/inventory";
import Feedback from "./assets/pages/feedback";
import Staffs from "./assets/pages/staffs";
import Perfomance from "./assets/pages/perfomance";
import Settings from "./assets/pages/settings";
const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Router>
      <main>
        <header>
          <Navbar toggleSidebar={toggleSidebar} isOpen={isOpen} />
        </header>
        <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />
        <Routes>
          <Route path="/" element={<Overview isOpen={isOpen} />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/issues" element={<Issues />} />
          <Route path="/users" element={<Users />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/staffs" element={<Staffs />} />
          <Route path="/perfomance" element={<Perfomance />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
