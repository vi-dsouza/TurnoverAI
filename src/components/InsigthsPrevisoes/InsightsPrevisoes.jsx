import React from 'react'
import style from './InsightsPrevisoes.module.css';
import Chart from 'react-apexcharts';

const InsightsPrevisoes = () => {
    const chartOptions = {
        chart: {
          type: 'bar',
          background: '#fff'
        },
        title: {
          text: 'Setores com Maior Turnover',
          align: 'left'
        },
        xaxis: {
          categories: ['Vendas', 'TI', 'RH', 'Logística', 'Financeiro']
        },
        colors: ['#a9825a']
      };
    
      const chartSeries = [
        {
          name: 'Demissões',
          data: [25, 18, 12, 9, 5]
        }
      ];
    
      return (
        <div className={style.container}>
          <h1>Insights e Previsões</h1>
    
          <div className={style.cardContainer}>
            <div className={style.card}>
              <h2>Turnover Geral</h2>
              <p>28%</p>
            </div>
            <div className={style.card}>
              <h2>Setor com Mais Saídas</h2>
              <p>Vendas</p>
            </div>
            <div className={style.card}>
              <h2>Principal Motivo</h2>
              <p>Salário baixo</p>
            </div>
          </div>
    
          <div className={style.chart}>
            <Chart options={chartOptions} series={chartSeries} type="bar" height={300} />
          </div>
        </div>
      );
}

export default InsightsPrevisoes