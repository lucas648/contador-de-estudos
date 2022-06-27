import React, { useState } from "react";
import { Tarefa } from "../../types/tarefa";
import Botao from "../botao";
import style from './formulario.module.scss'
import {v4 as uuidV4 } from 'uuid'

interface props{
  setTarefas: React.Dispatch<React.SetStateAction<Tarefa[]>>;
}

export default function Formulario({setTarefas}: props){

  const [nome, setNome] = useState('');
  const [tempo, setTempo] = useState('00:00:00')

  function adicionarTarefa(evento: React.FormEvent) {
    evento.preventDefault();
    setTarefas(tarefas => [
      ...tarefas,
      { 
        nome, 
        tempo,
        selecionado: false, 
        completado: false, 
        id: uuidV4()
      }
    ]);
    setNome('')
    setTempo('00:00:00')
  }

  return(
    <form 
      className={style.novaTarefa} 
      onSubmit={adicionarTarefa}
    >
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">
          Adicione um novo estudo!!
        </label>
        <input
          value={nome}
          onChange={evento=>{
            setNome(evento.target.value)
          }}
          type="text"
          name="tarefa"
          id="tarefa"
          placeholder="O que vamos estudar hoje??"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">
          Tempo
        </label>
        <input
          value={tempo}
          onChange={evento=>{
            setTempo(evento.target.value)
          }}
          type="time"
          step="1"
          name="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Botao
        type="submit"
        texto="Adicionar"
      />
    </form>
  )
}