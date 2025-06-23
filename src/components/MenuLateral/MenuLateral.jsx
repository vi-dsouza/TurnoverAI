import React from 'react';
import { NavLink } from 'react-router-dom';
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
      <NavLink to="/dashboard" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>
        <HiChartPie /> Dashboard
      </NavLink>
      <NavLink to="/cadastroFuncionario" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>
        <HiTable /> Cadastrar Funcionários
      </NavLink>
      <NavLink to="/funcionarios" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>
        <HiUser /> Funcionários
      </NavLink>
    </nav>

    <div className={styles.separator}></div>

    <nav className={styles.nav}>
      <NavLink to="/analiseSaidas" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>
        <HiInbox /> Análise de Saídas
      </NavLink>
      <NavLink to="/insights" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>
        <HiArrowSmRight /> Insights de Permanência
      </NavLink>
      <NavLink to="/relatorios" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>
        <HiViewBoards /> Relatórios
      </NavLink>
    </nav>
  </div>
  );
};

export default MenuLateral;
