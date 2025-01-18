/* eslint-disable react/prop-types */
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const NewUsersChart = ({ ExpenceData }) => {
  console.log("TP Chart : ", ExpenceData);

  const minY = Math.min(...ExpenceData);
  const maxY = Math.max(...ExpenceData);

  // Data for the bar chart
  const data = {
    labels: [
      "01 Jun",
      "02 Jun",
      "03 Jun",
      "04 Jun",
      "05 Jun",
      "06 Jun",
      "07 Jun",
      "08 Jun",
      "09 Jun",
      "10 Jun",
      "11 Jun",
      "12 Jun",
    ],
    datasets: [
      {
        label: "Sales",
        data: ExpenceData,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        barThickness: 16, // Controls the thickness of the bars
      },
    ],
  };

  // Options for the chart with a solid tooltip
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: "#ffffff",
        titleColor: "#000000",
        bodyColor: "#000000",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        titleFont: { size: 14, weight: "bold" },
        bodyFont: { size: 12 },
        displayColors: false,
        callbacks: {
          title: (tooltipItems) => tooltipItems[0].label,
          label: (tooltipItem) => `Sales: ${tooltipItem.raw}`,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
      y: {
        min: Math.floor(minY / 100) * 100,
        max: Math.ceil(maxY / 100) * 100,
        ticks: {
          display: false,
          stepSize: 100,
          font: {
            size: 10,
            color: "#555",
          },
        },
        grid: {
          display: false,
        },
      },
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
    animation: {
      duration: 1000,
      easing: "easeInOutQuad",
    },
  };

  return (
    <div
      style={{
        position: "relative",
        left: "-1rem",
        width: "20rem",
        height: "10rem",
      }}
    >
      <Bar data={data} options={options} />
    </div>
  );
};

export default NewUsersChart;
