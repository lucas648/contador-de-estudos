import React, { useState } from 'react';
import Cronometro from '../components/cronometro';
import Formulario from '../components/formulario';
import Lista from '../components/lista';
import style from './App.module.scss'
import { Tarefa } from "../types/tarefa";


function App() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([])

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas}/>
      <Cronometro/>
    </div>

  );
}

export default App;
