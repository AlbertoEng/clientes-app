import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { Router } from 'next/router';

const  Home = () => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if(!localStorage.getItem('user')) {
      Router.push('/auth/login');
    }

    const chartData = {
      labels: ['Dato 1', 'Dato 2', 'Dato 3', 'Dato 4', 'Dato 5'],
      datasets: [{
        label: 'Datos',
        data: [5, 30, 15, 10, 50], // Valores de tus datos
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1
      }]
    };

    const chartConfig = {
      type: 'pie',
      data: chartData,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Gráfico Circular de 5 Datos'
          }
        }
      }
    };

    if (chartContainer && chartContainer.current) {
      chartInstance.current = new Chart(chartContainer.current, chartConfig);
    }

    // Cleanup
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartContainer} />;
};

export default Home;

