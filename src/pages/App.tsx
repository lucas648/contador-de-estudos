import React, { useState } from 'react';
import Cronometro from '../components/cronometro';
import Formulario from '../components/formulario';
import Lista from '../components/lista';
import style from './App.module.scss'
import { Tarefa } from "../types/tarefa";


function App() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([])
  const [selecionado, setSelecionado] = useState<Tarefa>();

  function selecionaTarefa(tarefaSelecionada: Tarefa){
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => 
      tarefasAnteriores.map(tarefa =>({
        ...tarefa, 
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false
      })));
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista 
        tarefas={tarefas} 
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro/>
    </div>

  );
}

export default App;
