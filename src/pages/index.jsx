'use client';
import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import { useRouter } from 'next/router';

// Opt out of caching for all data requests in the route segment

function extraerRespuestas(NoPreg, objetoPrincipal) {
  let opcion0 = 0;
  let opcion1 = 0;
  let opcion2 = 0;
  let opcion3 = 0;
  let opcion4 = 0;

  // Convertir el objeto principal a un arreglo de valores
  const elementos = Object.values(objetoPrincipal);

  // Iterar sobre cada elemento del arreglo
  elementos.forEach(elemento => {
    // Iterar sobre las preguntas de cada elemento
    if (elemento.preguntas[NoPreg].respuesta == 0) {
      opcion0++;
    };
    if (elemento.preguntas[NoPreg].respuesta == 1) {
      opcion1++;
    };
    if (elemento.preguntas[NoPreg].respuesta == 2) {
      opcion2++;
    };
    if (elemento.preguntas[NoPreg].respuesta == 3) {
      opcion3++;
    };
    if (elemento.preguntas[NoPreg].respuesta == 4) {
      opcion4++;
    };
  });

  return {
    opcion0,
    opcion1,
    opcion2,
    opcion3,
    opcion4
  };
}



const Home = () => {
  const chartContainer0 = useRef(null);
  const chartInstance0 = useRef(null);
  const chartContainer1 = useRef(null);
  const chartInstance1 = useRef(null);
  const chartContainer2 = useRef(null);
  const chartInstance2 = useRef(null);
  const chartContainer3 = useRef(null);
  const chartInstance3 = useRef(null);
  const chartContainer4 = useRef(null);
  const chartInstance4 = useRef(null);

  const [respuestas0, setRespuestas0] = useState({});
  const [respuestas1, setRespuestas1] = useState({});
  const [respuestas2, setRespuestas2] = useState({});
  const [respuestas3, setRespuestas3] = useState({});
  const [respuestas4, setRespuestas4] = useState({});

  const router = useRouter();

  useEffect(() => {
    const getRespuestas = async () => {
      const resp = await fetch('https://engtech-8cb10-default-rtdb.firebaseio.com/respuestas/.json', { cache: 'no-store' });
      const data = await resp.json();
      const opciones0 = extraerRespuestas(0,data);
      const opciones1 = extraerRespuestas(1,data);
      const opciones2 = extraerRespuestas(2,data);
      const opciones3 = extraerRespuestas(3,data);
      const opciones4 = extraerRespuestas(4,data);
      setRespuestas0(opciones0);
      setRespuestas1(opciones1);
      setRespuestas2(opciones2);
      setRespuestas3(opciones3);
      setRespuestas4(opciones4);
    }
    getRespuestas();
  }, []);

  useEffect(() => {
    if (!localStorage.getItem('user')) {
      router.push('/auth/login');
    }

    // calcular las respuestas por persona
    // cuantas personas respondieron cada opcion
    // const objNuevo = contarRespuestas(respuestas);
    const { opcion0, opcion1, opcion2, opcion3, opcion4 } = respuestas0;
    const chartData = {
      labels: ['😭', '😢', '😐', '😀', '😍'],
      datasets: [{
        label: 'Respuestas',
        data: [opcion0, opcion1, opcion2, opcion3, opcion4], // Valores de tus datos
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
        borderWidth: 2
      }]
    };

    const chartConfig = {
      type: 'bar',
      data: chartData,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: '¿Que te parecio la calidad de tus bebidas?'.toUpperCase()
          }
        }
      }
    };

    if (chartContainer0 && chartContainer0.current) {
      chartInstance0.current = new Chart(chartContainer0.current, chartConfig);
    }

    // Cleanup
    return () => {
      if (chartInstance0.current) {
        chartInstance0.current.destroy();
      }
    };
  }, [respuestas0, router]);

  useEffect(() => {
    if (!localStorage.getItem('user')) {
      router.push('/auth/login');
    }

    // calcular las respuestas por persona
    // cuantas personas respondieron cada opcion
    // const objNuevo = contarRespuestas(respuestas);
    const { opcion0, opcion1, opcion2, opcion3, opcion4 } = respuestas1;
    const chartData = {
      labels: ['😭', '😢', '😐', '😀', '😍'],
      datasets: [{
        label: 'Respuestas',
        data: [opcion0, opcion1, opcion2, opcion3, opcion4], // Valores de tus datos
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
        borderWidth: 2
      }]
    };

    const chartConfig = {
      type: 'bar',
      data: chartData,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: '¿Que te parecio la calidad de tus alimentos?'.toUpperCase()
          }
        }
      }
    };

    if (chartContainer1 && chartContainer1.current) {
      chartInstance1.current = new Chart(chartContainer1.current, chartConfig);
    }

    // Cleanup
    return () => {
      if (chartInstance1.current) {
        chartInstance1.current.destroy();
      }
    };
  }, [respuestas1, router]);

  useEffect(() => {
    if (!localStorage.getItem('user')) {
      router.push('/auth/login');
    }

    // calcular las respuestas por persona
    // cuantas personas respondieron cada opcion
    // const objNuevo = contarRespuestas(respuestas);
    const { opcion0, opcion1, opcion2, opcion3, opcion4 } = respuestas2;
    const chartData = {
      labels: ['😭', '😢', '😐', '😀', '😍'],
      datasets: [{
        label: 'Respuestas',
        data: [opcion0, opcion1, opcion2, opcion3, opcion4], // Valores de tus datos
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
        borderWidth: 2
      }]
    };

    const chartConfig = {
      type: 'bar',
      data: chartData,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: '¿Que te parecio la calidad de tus alimentos?'.toUpperCase()
          }
        }
      }
    };

    if (chartContainer2 && chartContainer2.current) {
      chartInstance2.current = new Chart(chartContainer2.current, chartConfig);
    }

    // Cleanup
    return () => {
      if (chartInstance2.current) {
        chartInstance2.current.destroy();
      }
    };
  }, [respuestas2, router]);

  useEffect(() => {
    if (!localStorage.getItem('user')) {
      router.push('/auth/login');
    }

    // calcular las respuestas por persona
    // cuantas personas respondieron cada opcion
    // const objNuevo = contarRespuestas(respuestas);
    const { opcion0, opcion1, opcion2, opcion3, opcion4 } = respuestas3;
    const chartData = {
      labels: ['😭', '😢', '😐', '😀', '😍'],
      datasets: [{
        label: 'Respuestas',
        data: [opcion0, opcion1, opcion2, opcion3, opcion4], // Valores de tus datos
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
        borderWidth: 2
      }]
    };

    const chartConfig = {
      type: 'bar',
      data: chartData,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: '¿Que te parecio la calidad de tus alimentos?'.toUpperCase()
          }
        }
      }
    };

    if (chartContainer3 && chartContainer3.current) {
      chartInstance3.current = new Chart(chartContainer3.current, chartConfig);
    }

    // Cleanup
    return () => {
      if (chartInstance3.current) {
        chartInstance3.current.destroy();
      }
    };
  }, [respuestas3, router]);

  useEffect(() => {
    if (!localStorage.getItem('user')) {
      router.push('/auth/login');
    }

    // calcular las respuestas por persona
    // cuantas personas respondieron cada opcion
    // const objNuevo = contarRespuestas(respuestas);
    const { opcion0, opcion1, opcion2, opcion3, opcion4 } = respuestas4;
    const chartData = {
      labels: ['😭', '😢', '😐', '😀', '😍'],
      datasets: [{
        label: 'Respuestas',
        data: [opcion0, opcion1, opcion2, opcion3, opcion4], // Valores de tus datos
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
        borderWidth: 2
      }]
    };

    const chartConfig = {
      type: 'bar',
      data: chartData,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: '¿Que te parecio la calidad de tus alimentos?'.toUpperCase()
          }
        }
      }
    };

    if (chartContainer4 && chartContainer4.current) {
      chartInstance4.current = new Chart(chartContainer4.current, chartConfig);
    }

    // Cleanup
    return () => {
      if (chartInstance4.current) {
        chartInstance4.current.destroy();
      }
    };
  }, [respuestas4, router]);

  return <div>

    <div className='flex px-2 justify-end mt-2'>
      <button className='bg-red-600 p-2 text-white'>Cerrar Sesion</button>
    </div>
    <h1 className='text-center font-bold text-xl mt-5'>Resultados de la Encuesta Camino a Comala</h1>
    <h1 className='text-center font-bold text-2xl mt-5'>Manzanillo</h1>
    <div className='flex flex-wrap justify-center items-center'>
      <div className='w-full md:w-1/2 lg:w-1/4 h-full  flex justify-center p-2 border border-1 border-zinc-200'>
        <canvas style={{ height: '250px' }} ref={chartContainer0} />
      </div>
      <div className='w-full md:w-1/2 lg:w-1/4 h-full  flex justify-center p-2 border border-1 border-zinc-200'>
        <canvas style={{ height: '250px' }} ref={chartContainer1} />
      </div>
      <div className='w-full md:w-1/2 lg:w-1/4 h-full  flex justify-center p-2 border border-1 border-zinc-200'>
        <canvas style={{ height: '250px' }} ref={chartContainer2} />
      </div>
      <div className='w-full md:w-1/2 lg:w-1/4 h-full  flex justify-center p-2 border border-1 border-zinc-200'>
        <canvas style={{ height: '250px' }} ref={chartContainer3} />
      </div>
      <div className='w-full md:w-1/2 lg:w-1/4 h-full  flex justify-center p-2 border border-1 border-zinc-200'>
        <canvas style={{ height: '250px' }} ref={chartContainer4} />
      </div>
    </div>
    <footer className="bg-zinc-900 py-14 mt-5"> 
          <p className="text-slate-200 text-center text-sm">Developed by </p>
          <p className="text-slate-200 text-center text-sm font-bold">Jesus Eng</p>
      </footer>
  </div>;
};

export default Home;

