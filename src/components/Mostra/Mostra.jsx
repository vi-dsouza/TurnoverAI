import React from 'react';
import style from './Mostra.module.css';
import GraficoGeral from '../GraficoGeral/GraficoGeral';
import { Routes, Route } from 'react-router-dom';
import FormularioCadastro from '../FormularioCadastro/FormularioCadastro';
import Funcionarios from '../Funcionarios/Funcionarios';
import AnaliseSaidas from '../AnaliseSaidas/AnaliseSaidas';
import InsightsPrevisoes from '../InsigthsPrevisoes/InsightsPrevisoes';

const Mostra = () => {
  return (
    <div className={style.main}>
      <div className={style.principal}>
        <Routes>
          <Route path="/dashboard" element={<GraficoGeral />} />
          <Route path="/cadastroFuncionario" element={<FormularioCadastro />} />
          <Route path="/funcionarios" element={<Funcionarios />} />
          <Route path="/analiseSaidas" element={<AnaliseSaidas/>} />
          <Route path='/insights' element={<InsightsPrevisoes/>} />
        </Routes>
      </div>
    </div>
  );
};

export default Mostra;
