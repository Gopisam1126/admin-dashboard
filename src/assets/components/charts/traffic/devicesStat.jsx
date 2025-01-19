import DesktopMacOutlinedIcon from "@mui/icons-material/DesktopMacOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import TabletAndroidOutlinedIcon from "@mui/icons-material/TabletAndroidOutlined";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DeviceUsageChart = () => {
  const data = {
    labels: ["Desktop", "Mobile", "Tablet"],
    datasets: [
      {
        label: "Device Usage",
        data: [42.1, 33.7, 19.6],
        backgroundColor: ["#60A5FA", "#FB923C", "#4ADE80"],
        hoverBackgroundColor: ["#3B82F6", "#F97316", "#22C55E"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const value = tooltipItem.raw;
            return `${tooltipItem.label}: ${value}%`;
          },
        },
        backgroundColor: "#1E293B",
        titleColor: "#F9FAFB",
        bodyColor: "#F9FAFB",
        borderWidth: 0.5,
        borderColor: "#475569",
      },
    },
  };

  return (
    <div
      style={{
        position: "relative",
        top: "2rem",
        width: "400px",
        height: "400px",
        margin: "auto",
        padding: "20px",
      }}
    >
      <h3
        style={{
          textAlign: "center",
          color: "#F9FAFB",
          fontSize: "18px",
          marginBottom: "10px",
        }}
      >
        Session devices
      </h3>
      <Doughnut data={data} options={options} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "20px",
          color: "#F9FAFB",
          fontSize: "14px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div className="mb-2">
            <DesktopMacOutlinedIcon style={{
              color: "#60A5FA"
            }} />
          </div>
          <p>Desktop</p>
          <strong>42.1%</strong>
        </div>
        <div style={{ textAlign: "center" }}>
          <div className="mb-2">
            <PhoneAndroidOutlinedIcon style={{
              color: "#FB923C"
            }} />
          </div>
          <p>Mobile</p>
          <strong>33.7%</strong>
        </div>
        <div style={{ textAlign: "center" }}>
          <div className="mb-2">
            <TabletAndroidOutlinedIcon style={{
              color: "#4ADE80"
            }} />
          </div>
          <p>Tablet</p>
          <strong>19.6%</strong>
        </div>
      </div>
    </div>
  );
};

export default DeviceUsageChart;
