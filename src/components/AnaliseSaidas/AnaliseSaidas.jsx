import React from 'react';
import style from './AnaliseSaidas.module.css';
import Chart from 'react-apexcharts';
import ReactApexChart from 'react-apexcharts';

function randomizeArray(arr) {
  const array = arr.slice();
  let currentIndex = array.length, temp, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
}

const sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

const AnaliseSaidas = () => {
  const labels = [...Array(24).keys()].map(n => `2018-09-${String(n + 1).padStart(2, '0')}`);

  const optionsVoluntarias = {
    chart: {
      sparkline: { enabled: true },
      background: '#ffffff'
    },
    stroke: { curve: 'smooth' },
    fill: { opacity: 1 },
    labels,
    yaxis: { min: 0 },
    xaxis: { type: 'datetime' },
    colors: ['#002B36'],
    title: {
      text: '$424,652',
      offsetX: 0,
      style: { fontSize: '20px' }
    },
    subtitle: {
      text: 'Saídas Voluntárias',
      offsetX: 0,
      style: { fontSize: '14px' }
    },
    dataLabels: { enabled: false }
  };

  const optionsInvoluntarias = {
    chart: {
      sparkline: { enabled: true },
      background: '#ffffff'
    },
    stroke: { curve: 'smooth' },
    fill: { opacity: 1 },
    labels,
    yaxis: { min: 0 },
    xaxis: { type: 'datetime' },
    colors: ['#8B0000'],
    title: {
      text: '$291,304',
      offsetX: 0,
      style: { fontSize: '20px' }
    },
    subtitle: {
      text: 'Saídas Involuntárias',
      offsetX: 0,
      style: { fontSize: '14px' }
    },
    dataLabels: { enabled: false }
  };

  const seriesVoluntarias = [{
    name: 'Saídas Voluntárias',
    data: randomizeArray(sparklineData)
  }];

  const seriesInvoluntarias = [{
    name: 'Saídas Involuntárias',
    data: randomizeArray(sparklineData)
  }];


  return (
    <div className={style.container}>
      <h1 className={style.title}>Análise de Saídas</h1>
      <div className={style.escolha}>
        <label htmlFor="escolha">Selecione um Colaborador:</label>
        <input
            type='text'
            id='colaborador'
            placeholder='Nome do colaborador para previsão'
        />
        <button className={style.botaoAnalisar}>Analisar</button>
      </div>
      <div className={style.cardContainer}>
        <div className={style.chartCard}>
          <Chart options={optionsVoluntarias} series={seriesVoluntarias} type="area" height={170} />
        </div>
        <div className={style.chartCard}>
          <Chart options={optionsInvoluntarias} series={seriesInvoluntarias} type="area" height={170} />
        </div>
      </div>
    </div>
  );
};

export default AnaliseSaidas;
