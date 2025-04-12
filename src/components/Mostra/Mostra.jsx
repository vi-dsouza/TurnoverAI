import React from 'react';
import style from './Mostra.module.css';
import GraficoGeral from '../GraficoGeral/GraficoGeral';
import { Routes, Route } from 'react-router-dom';
import FormularioCadastro from '../FormularioCadastro/FormularioCadastro';
import Funcionarios from '../Funcionarios/Funcionarios';

const Mostra = () => {
  return (
    <div className={style.main}>
      <div className={style.principal}>
        <Routes>
          <Route path="/dashboard" element={<GraficoGeral />} />
          <Route path="/cadastroFuncionario" element={<FormularioCadastro />} />
          <Route path="/funcionarios" element={<Funcionarios />} />
        </Routes>
      </div>
    </div>
  );
};

export default Mostra;
