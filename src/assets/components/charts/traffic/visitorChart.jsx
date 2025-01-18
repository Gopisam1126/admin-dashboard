/* eslint-disable react/prop-types */
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const NumberOfVisitos = ({ TotalProfit }) => {

  const minY = Math.min(...TotalProfit);
  const maxY = Math.max(...TotalProfit);

  // Data for the line chart
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
        data: TotalProfit,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 2,
        tension: 0.4, // Smooth curve
        pointRadius: 0, // Size of the points
        pointHoverRadius: 3, // Size of points on hover
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
        },
        grid: {
          display: false,
        },
      },
    },
    interaction: {
      mode: "index", // Ensure the tooltip is triggered by the x-axis value
      intersect: false, // Allow the tooltip to show even when not hovering directly on a point
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
        width: "15rem",
        height: "8rem",
      }}
    >
      <Line data={data} options={options} />
    </div>
  );
};

export default NumberOfVisitos;
