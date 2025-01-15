import { sideBarItems } from "../utils/sidebar";
import MenuIcon from "@mui/icons-material/Menu";
const Sidebar = () => {
  return (
    <section className="fixed top-0 left-0 text-slate-50 bg-slate-800 py-5 w-80 h-[100vh]">
      <aside className="py-0.5 px-5 w-80">
        <div className="flex items-center text-2xl">
          <img
            src="images\logo-color.png"
            alt="logo"
            className="w-10 h-10 rounded-full mr-2 cursor-pointer"
          />
          <h3>QuantumStax</h3>
          <MenuIcon
            style={{
              cursor: "pointer",
              fontSize: "2rem",
              marginLeft: "3rem",
              transform: "translateY(0.2rem)"
            }}
          />
        </div>
        <div>
          <h2 className="uppercase opacity-75 mt-3 text-lg">Dashboard</h2>
          <div>
            {sideBarItems.map((item, i) => (
              <div
                key={i}
                className="list-none text-xl flex items-center gap-2 cursor-pointer mt-3 hover:bg-slate-700 py-1 px-1 rounded-lg"
              >
                <div>{item.icon}</div>
                <li>{item.item}</li>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </section>
  );
};

export default Sidebar;
