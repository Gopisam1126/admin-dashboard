import { useState } from "react";
import { sideBarItems } from "../utils/sidebar";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <section
      className={`fixed top-0 left-0 text-slate-50 bg-slate-800 py-1 h-[100vh] transition-all duration-300 ${
        isOpen ? "w-80" : "w-20"
      }`}
    >
      <aside className={`px-5 w-full`}>
        <div className={`${isOpen ? "relative left-48" : "relative left-1"} transition-all duration-300`}>
          {isOpen ? (
            <MenuOpenIcon
              onClick={toggleSidebar}
              style={{
                cursor: "pointer",
                fontSize: "2rem",
                marginLeft: isOpen ? "3rem" : "0rem",
                transform: "translateY(0.2rem)",
              }}
            />
          ) : (
            <MenuIcon
              onClick={toggleSidebar}
              style={{
                cursor: "pointer",
                fontSize: "2rem",
                marginLeft: "0rem",
                transform: "translateY(0.2rem)",
              }}
            />
          )}
        </div>
        <div>
          {isOpen && (
            <h2 className="uppercase opacity-75 mt-3 text-lg">Dashboard</h2>
          )}
          <div>
            {sideBarItems.map((item, i) => (
              <div
                key={i}
                className={`list-none text-xl flex items-center gap-2 cursor-pointer mt-3 hover:bg-slate-700 py-1 px-1 rounded-lg transition-all duration-300 ${
                  isOpen ? "justify-start" : "justify-center"
                }`}
              >
                <div>{item.icon}</div>
                {isOpen && <li>{item.item}</li>}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center text-2xl mt-4 cursor-pointer bg-slate-700 py-2 px-1 rounded-lg">
          <img
            src="images\\logo-color.png"
            alt="logo"
            className={`w-8 h-8 rounded-full mr-2 transition-all duration-300 ${
              !isOpen && "mx-auto"
            }`}
          />
          {isOpen && <h3>QuantumStax</h3>}
        </div>
      </aside>
    </section>
  );
};

export default Sidebar;
