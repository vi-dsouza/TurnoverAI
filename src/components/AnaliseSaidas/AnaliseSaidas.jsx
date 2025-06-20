import React, { useState, useEffect } from 'react';
import style from './AnaliseSaidas.module.css';
import Chart from 'react-apexcharts';

const AnaliseSaidas = () => {
  const [colaboradores, setColaboradores] = useState([]);
  const [colaboradorSelecionado, setColaboradorSelecionado] = useState('');
  const [erro, setErro] = useState(null);
  const [carregando, setCarregando] = useState(true);

  const [erroPrevisao, setErroPrevisao] = useState(null);
  const [carregandoPrevisao, setCarregandoPrevisao] = useState(false);
  const [resultadoPrevisao, setResultadoPrevisao] = useState(null);

  // Valor da previsão para o gauge
  const valorGauge = resultadoPrevisao && resultadoPrevisao.probab_permanencia
    ? parseFloat(resultadoPrevisao.probab_permanencia.replace('%', ''))
    : 0;

  const optionsGauge = {
  chart: {
    type: 'radialBar',
    offsetY: -10,
    sparkline: { enabled: true },
  },
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      hollow: { size: '50%' },
      track: { background: '#eee' },
      dataLabels: {
        name: { show: false },
        value: {
          formatter: val => `${val.toFixed(2)}%`,
          fontSize: '1.7rem',
          color: '#111',
          offsetY: -2,
          show: true,
        }
      }
    }
  },
  fill: { colors: ['#a9825a'] },
  labels: ['Permanência'],
};

  useEffect(() => {
    fetch('http://localhost:5000/cadastroFuncionarios/consulta')
      .then(response => {
        if (!response.ok) throw new Error(`Erro ${response.status}: ${response.statusText}`);
        return response.json();
      })
      .then(data => {
        if (Array.isArray(data) && data.length > 0) setColaboradores(data);
        else setErro("Nenhum colaborador encontrado.");
      })
      .catch(error => {
        console.error('Erro ao buscar colaboradores: ', error);
        setErro("Erro ao carregar colaboradores.");
      })
      .finally(() => setCarregando(false));
  }, []);

  const buscarPrevisao = () => {
    const id = colaboradorSelecionado;
    if (!id) {
      setErroPrevisao("Por favor, selecione um colaborador.");
      return;
    }

    setErroPrevisao(null);
    setCarregandoPrevisao(true);
    setResultadoPrevisao(null);

    fetch(`http://localhost:5000/previsao/${id}`)
      .then(response => {
        if (!response.ok) throw new Error("Erro na requisição.");
        return response.json();
      })
      .then(data => {
        setResultadoPrevisao(data);
      })
      .catch(error => {
        console.error(error);
        setErroPrevisao("Erro ao buscar a previsão.");
      })
      .finally(() => setCarregandoPrevisao(false));
  };

  return (
    <div className={style.container}>
          <h1 className={style.title}>Análise de Permanência</h1>

          <div className={style.escolha}>
      <label htmlFor="colaborador">Selecione um Colaborador:</label>

      <select
        id="colaborador"
        value={colaboradorSelecionado}
        onChange={e => setColaboradorSelecionado(e.target.value)}
      >
        <option value="">-- Selecione --</option>
        {colaboradores.map(colab => (
          <option key={colab[0]} value={colab[0]}>
            {colab[0]} - {colab[1]}
          </option>
        ))}
      </select>

      <button
        className={style.botaoAnalisar}
        disabled={!colaboradorSelecionado || carregandoPrevisao}
        onClick={buscarPrevisao}
        title={erroPrevisao || ''}
      >
        {erroPrevisao
          ? 'Erro! Tente novamente'
          : carregandoPrevisao
            ? 'Carregando...'
            : 'Analisar'}
      </button>
    </div>

      <div className={style.cardContainer} style={{ display: 'flex', justifyContent: 'center' }}>
        <div className={style.chartCard} style={{ width: 540, textAlign: 'center' }}>
          <h3 style={{ marginBottom: '10px', color: 'black', fontSize: '1.5rem' }}>Probabilidade de Permanência</h3>
          <Chart
            options={optionsGauge}
            series={[valorGauge]}
            type="radialBar"
            height={300}
          />
        </div>

      </div>
    </div>
  );
};

export default AnaliseSaidas;
