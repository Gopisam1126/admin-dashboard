import ManOutlinedIcon from '@mui/icons-material/ManOutlined';
import WomanOutlinedIcon from '@mui/icons-material/WomanOutlined';
import TransgenderOutlinedIcon from '@mui/icons-material/TransgenderOutlined';
import { Pie } from "react-chartjs-2"; // Import Pie instead of Doughnut
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const AgeGroup = () => {
  const data = {
    labels: ["Male", "Female", "Other"],
    datasets: [
      {
        label: "Device Usage",
        data: [54, 35, 11],
        backgroundColor: ["#BAE6FD", "#E9D5FF", "#A7F3D0"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
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
        backgroundColor: "#fff",
        titleColor: "#000",
        bodyColor: "#000",
        borderWidth: 1,
        borderColor: "#ddd",
      },
    },
  };

  return (
    <div
      style={{
        position: "relative",
        top: "0rem",
        width: "15rem",
        height: "15rem",
        margin: "auto",
        padding: "20px",
      }}
    >
      <Pie data={data} options={options} />
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
            <ManOutlinedIcon
              style={{
                color: "#BAE6FD",
              }}
            />
          </div>
          <p>Male</p>
          <strong>54%</strong>
        </div>
        <div style={{ textAlign: "center" }}>
          <div className="mb-2">
            <WomanOutlinedIcon
              style={{
                color: "#E9D5FF",
              }}
            />
          </div>
          <p>Female</p>
          <strong>35%</strong>
        </div>
        <div style={{ textAlign: "center" }}>
          <div className="mb-2">
            <TransgenderOutlinedIcon
              style={{
                color: "#A7F3D0",
              }}
            />
          </div>
          <p>Other</p>
          <strong>11%</strong>
        </div>
      </div>
    </div>
  );
};

export default AgeGroup;
