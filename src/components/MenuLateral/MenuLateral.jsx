import React from 'react';
import { Link } from 'react-router-dom';
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards
} from 'react-icons/hi';
import { BiBuoy } from 'react-icons/bi';
import styles from './MenuLateral.module.css';

const MenuLateral = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>TurnoverAI</div>

      <nav className={styles.nav}>
        <Link to="/dashboard"><HiChartPie /> Dashboard</Link>
        <Link to="/cadastroFuncionario"><HiTable /> Cadastrar Funcionários</Link>
        <Link to="/funcionarios"><HiUser /> Funcionários</Link>
      </nav>

      <div className={styles.separator}></div>

      <nav className={styles.nav}>
        
        <Link to="/analiseSaida"><HiInbox /> Análise de Saidas</Link>
        <Link to="/insights"><HiArrowSmRight /> Insights/ Previsões</Link>
        <Link to="/relatorios"><HiViewBoards /> Relatórios</Link>
      </nav>
    </div>
  );
};

export default MenuLateral;
