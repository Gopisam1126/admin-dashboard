import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DeviceUsageChart = () => {
  const data = {
    labels: ['Mobile', 'Computer', 'Tablet'],
    datasets: [
      {
        label: 'Device Usage',
        data: [25, 32, 43], // Values as percentages
        backgroundColor: ['#020617', '#E9D5FF', '#A7F3D0'], // Colors for slices
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Colors on hover
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#fff', // Legend text color
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const value = tooltipItem.raw;
            return `${tooltipItem.label}: ${value}%`;
          },
        },
        backgroundColor: '#fff',
        titleColor: '#000',
        bodyColor: '#000',
        borderWidth: 1,
        borderColor: '#ddd',
      },
    },
  };

  return (
    <div
      style={{
        position: 'relative',
        top: "8rem",
        width: '400px',
        height: '400px',
        margin: 'auto',
      }}
    >
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DeviceUsageChart;
