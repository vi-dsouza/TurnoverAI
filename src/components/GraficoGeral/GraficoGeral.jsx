import {React, useState } from 'react'
import ReactApexChart from 'react-apexcharts';
import style from './GraficoGeral.module.css';
import { colors } from '@mui/material';


const GraficoGeral = () => {
    const [state, setState] = useState({
          
        series: [{
          name: 'Permaneceram',
          data: [31, 40, 28, 51, 42, 109, 100]
        }, {
          name: 'Sairam',
          color: '#b98b5b',
          data: [11, 32, 45, 32, 34, 52, 41]
        }],
        options: {
          chart: {
            height: 350,
            type: 'area'
          },
          title: {
            text: 'Comparativo de Rotatividade', 
            align: 'center',
            margin: 10,
            offsety: 5,
            style: {
                fontSize: '40px',
                color: '#a9825a',
                fontFamily: 'Arial'
            }
          },
          legend: {
            labels: {
                colors: '#a9825a',
                useSeriesColors: false,
            },
            fontSize: '16px',
            fontFamily: 'Arial',
            position: 'bottom'
          },
          yaxis: {
            labels: {
                style: {
                    colors: '#a9825a',
                    fontSize: '14px'
                }
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          xaxis: {
            labels: {
                style: {
                    colors: '#a9825a',
                    fontSize: '14px'
                }
            },
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm'
            },
          },
          responsive: [
            {
              breakpoint: 768, // 📱 Telas menores (mobile/tablet)
              options: {
                chart: {
                  width: '100%',
                },
                legend: {
                  position: 'bottom',
                },
              },
            },
            {
              breakpoint: 1440, // 💻 Notebooks e telas médias
              options: {
                chart: {
                  width: 700,
                  height: 400,
                },
                legend: {
                  fontSize: '14px',
                },
              },
            },
            {
              breakpoint: 2000, // 🖥️ Telas grandes (ultrawide/4K)
              options: {
                chart: {
                  width: 1000,
                  height: 500,
                },
                legend: {
                  fontSize: '18px',
                },
              },
            }
          ]
          
          
        },
      
      
    });

    return (
      <div>
        <div id="chart" className={style.chart}>
            <ReactApexChart options={state.options} series={state.series} type="area"  height={380} width={750}/>
          </div>
        <div id="html-dist"></div>
      </div>
    );
  }


export default GraficoGeral