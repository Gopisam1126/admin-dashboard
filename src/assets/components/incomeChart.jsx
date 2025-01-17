/* eslint-disable react/prop-types */
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const IncomeChart = ({isOpen, IncomeData}) => {

  const minY = Math.min(...IncomeData);
  const maxY = Math.max(...IncomeData);
  // Data for the line chart
  const data = {
    labels: [
      '01 Jun', '02 Jun', '03 Jun', '04 Jun', '05 Jun',
      '06 Jun', '07 Jun', '08 Jun', '09 Jun', '10 Jun', '11 Jun', '12 Jun',
    ],
    datasets: [
      {
        label: 'Sales',
        data: IncomeData,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
        tension: 0.4, // Smooth curve
        pointRadius: 3, // Size of the points
        pointHoverRadius: 5, // Size of points on hover
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
        backgroundColor: '#ffffff', // Solid white background
        titleColor: '#000000', // Black color for the title
        bodyColor: '#000000', // Black color for the content
        borderColor: 'rgba(75, 192, 192, 1)', // Border color of the tooltip
        borderWidth: 1, // Width of the border
        titleFont: { size: 14, weight: 'bold' },
        bodyFont: { size: 12 },
        displayColors: false, // Hide the legend color box
        callbacks: {
          title: (tooltipItems) => tooltipItems[0].label, // Display the label as the title
          label: (tooltipItem) => `Sales: ${tooltipItem.raw}`, // Display the sales value
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#fff', // X-axis labels color
        },
        grid: {
          display: false, // Hide vertical gridlines
        },
      },
      y: {
        min: Math.floor(minY / 100) * 100,
        max: Math.ceil(maxY / 100) * 100,
        ticks: {
          color: '#fff', // Y-axis labels color
          stepSize: 100,
        },
        grid: {
          color: '#fff', // Horizontal gridlines color
        },
      },
    },
    interaction: {
      mode: 'index', // Ensure the tooltip is triggered by the x-axis value
      intersect: false, // Allow the tooltip to show even when not hovering directly on a point
    },
    animation: {
      duration: 1000, // Duration of the animation in milliseconds
      easing: 'easeInOutQuad', // Easing function for the animation
    },
  };

  return (
    <div
      style={{
        position: 'relative',
        top: '2rem',
        left: '0rem',
        width: `${isOpen ? "1000px" : "1300px"}`,
        height: '400px',
        transition: "all 0.3s linear"
      }}
    >
      <Line data={data} options={options} />
    </div>
  );
};

export default IncomeChart;
