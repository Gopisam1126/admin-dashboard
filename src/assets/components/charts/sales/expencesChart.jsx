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

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ExpencesChart = ({isOpen, ExpenceData}) => {

  const minY = Math.min(...ExpenceData);
  const maxY = Math.max(...ExpenceData);

  const data = {
    labels: [
      '01 Jun', '02 Jun', '03 Jun', '04 Jun', '05 Jun',
      '06 Jun', '07 Jun', '08 Jun', '09 Jun', '10 Jun', '11 Jun', '12 Jun',
    ],
    datasets: [
      {
        label: 'Sales',
        data: ExpenceData,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 3,
        pointHoverRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: '#ffffff',
        titleColor: '#000000',
        bodyColor: '#000000',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        titleFont: { size: 14, weight: 'bold' },
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
          color: '#fff',
        },
        grid: {
          display: false,
        },
      },
      y: {
        min: Math.floor(minY / 100) * 100,
        max: Math.ceil(maxY / 100) * 100,
        ticks: {
          color: '#fff',
          stepSize: 100,
        },
        grid: {
          color: '#fff',
        },
      },
    },
    interaction: {
      mode: 'index', // Ensure the tooltip is triggered by the x-axis value
      intersect: false, // Allow the tooltip to show even when not hovering directly on a point
    },
    animation: {
      duration: 1000,
      easing: 'easeInOutQuad',
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
      }}
    >
      <Line data={data} options={options} />
    </div>
  );
};

export default ExpencesChart;
