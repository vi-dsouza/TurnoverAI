import React, { useEffect, useState } from 'react';
import style from './InsightsPrevisoes.module.css';
import Chart from 'react-apexcharts';

const InsightsPrevisoes = () => {
  const [permanencia, setPermanencia] = useState(null);
  const [resultadoGenero, setResultadoGenero] = useState(null);
  const [resultadoSetor, setResultadoSetor] = useState(null);
  const [setor, setSetor] = useState(null);
  const [setores, setSetores] = useState([]);
  const [valores, setValores] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/permanenciaGeral")
      .then((response) => response.json())
      .then((data) => {
        setPermanencia(data.permanencia_geral);
      })
      .catch((error) => {
        console.error("Erro ao buscar permanência:", error);
        setError(true);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/generoComMaiorPermanencia")
    .then((response) => response.json())
    .then((data) => {
      setResultadoGenero(data.genero_mais_permanencte);
    })
    .catch((error) => {
      console.error("Erro ao buscar resultado: ", error);
      setError(true);
    });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/permanenciaPorSetor")
      .then((response) => response.json())
      .then((data) => {
        setResultadoSetor(data.setor_mais_permanente);
        setSetor(data.media_setor);
      })
      .catch((error) => {
        console.error("Erro ao buscar resultado: ", error);
        setError(true);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/mediaGeralSetores")
      .then((response) => response.json())
      .then((data) => {
        //Extrai os nomes dos setores e os valores em porcentagem
        const nomesSetores = Object.keys(data);
        const valoresSetores = Object.values(data).map(v => parseFloat((v.toFixed(4))));

        setSetores(nomesSetores);
        setValores(valoresSetores);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados: ", error);
        setError(true);
      });
  }, []);

  const chartOptions = {
    chart: {
      type: 'bar',
      background: '#fff'
    },
    title: {
      text: 'Permanência por Setores',
      align: 'left'
    },
    xaxis: {
      categories: setores,
      labels: {
        rotate: -30,
        style: {
          fontSize: '10px'
        }
      }
    },
    yaxis: {
      labels: {
        formatter: (val) => `${val}%`
      }
    },
    tooltip: {
      y: {
        formatter: (val) => `${val}%`
      }
    },
    legend: {
      show: false
    },
    colors: ['#a9825a']
  };

  const chartSeries = [
    {
      name: 'Permanência (%)',
      data: valores
    }
  ];

  return (
    <div className={style.container}>
      <h1>Insights de Permanência</h1>

      <div className={style.cardContainer}>
        <div className={style.card}>
          <h2>Permanência Geral</h2>
          {error ? (
            <p style={{ color: "red" }}>0</p>
          ) : permanencia ? (
            <p>{permanencia}</p>
          ) : (
            <p>Carregando...</p>
          )}
        </div>
        <div className={style.card}>
          <h2>Gênero Mais Permanente</h2>
          {error ? (
            <p style={{ color: "red" }}>0</p>
          ) : resultadoGenero ? (
            <p>{resultadoGenero}</p>
          ) : (
            <p>Carregando...</p>
          )}
        </div>
        <div className={style.card}>
          <h2>Setor mais Permanente</h2>
          {error ? (
            <p style={{ color: "red" }}>0</p>
          ) : resultadoSetor ? (
            <p>{resultadoSetor}</p>
          ) : (
            <p>Carregando...</p>
          )}
        </div>
      </div>

      <div className={style.chart}>
        <Chart options={chartOptions} series={chartSeries} type="bar" height={300} 
        style={{
          border: '1px solid #ccc', // ← cor e espessura da borda
          borderRadius: '20px',       // opcional: cantos arredondados
          padding: '5px',            // opcional: espaço interno
        }}
        />
      </div>
    </div>
  );
}

export default InsightsPrevisoes;
