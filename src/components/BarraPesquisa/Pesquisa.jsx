import React from 'react'
import style from './Pesquisa.module.css';
import { FaSearch } from 'react-icons/fa';

export default function Pesquisa() {
  return (
    <div className={style.container}>
        
        <input 
            type="text" 
            placeholder='Pesquisar Fucionário'
            className={style.input}
        />
        <FaSearch className={style.icone}/>
    </div>
  );
}
