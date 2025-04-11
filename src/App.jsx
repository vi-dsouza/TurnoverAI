import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MenuLateral from './components/MenuLateral/MenuLateral'
import style from './App.module.css'
import Pesquisa from './components/BarraPesquisa/Pesquisa';
import Mostra from './components/Mostra/Mostra'

function App() {

  return (

    <div className={style.container}>
      <MenuLateral />
      <Pesquisa />
      <Mostra />
    </div>
      
  )
}

export default App
