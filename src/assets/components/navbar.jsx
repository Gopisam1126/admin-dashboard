/* eslint-disable react/prop-types */
// import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
const Navbar = ({ isOpen }) => {
  return (
    <nav
      className={`fixed ${
        isOpen
          ? "left-80 w-[80rem] bg-white/10 backdrop-blur-lg backdrop-opacity-70"
          : "left-20 w-[92rem] bg-transparent"
      } transition-all duration-300 flex items-center py-2 px-3 text-2xl text-slate-50`}
    >
      <div className="">
        <input
          type="search"
          name="search"
          id="search"
          className="bg-transparent border rounded-lg border-slate-500 z-50 px-2 py-0.5 caret-custom"
          autoComplete="off"
        />
        <SearchIcon
          style={{
            fontSize: "2rem",
            position: "relative",
            left: "-2.5rem",
            top: "-0.2rem",
            opacity: "0.4",
            cursor: "pointer",
          }}
        />
      </div>
      <div
        className={`${
          isOpen ? "absolute right-24" : "absolute right-16"
        } flex items-center opacity-75`}
      >
        <div className="hover:bg-white/10 hover:backdrop-blur-lg hover:backdrop-opacity-60 py-2 px-3">
          <MessageIcon
            style={{
              fontSize: "2rem",
              cursor: "pointer",
            }}
          />
        </div>
        <div className="hover:bg-white/10 hover:backdrop-blur-lg hover:backdrop-opacity-60 py-2 px-3">
          <NotificationsIcon
            style={{
              fontSize: "2rem",
              cursor: "pointer",
            }}
          />
        </div>
        <div className="hover:bg-white/10 hover:backdrop-blur-lg hover:backdrop-opacity-60 py-2 px-3">
          <AdminPanelSettingsIcon
            style={{
              fontSize: "2rem",
              cursor: "pointer",
            }}
          />
        </div>
        <div className="hover:bg-white/10 hover:backdrop-blur-lg hover:backdrop-opacity-60 py-2 px-3">
          <SupervisorAccountIcon
            style={{
              fontSize: "2rem",
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
