import React from "react";
import { Tarefa } from "../../types/tarefa";
import Botao from "../botao";
import style from './formulario.module.scss'
import {v4 as uuidV4 } from 'uuid'

class Formulario extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<Tarefa[]>>;
}> {
  state ={
    nome: '',
    tempo: '00:00:00'
  };

  adicionarTarefa(evento: React.FormEvent) {
    evento.preventDefault();
    this.props.setTarefas(tarefas => [
      ...tarefas,
      { 
        ...this.state, 
        selecionado: false, 
        completado: false, 
        id: uuidV4()
      }
    ]);
    this.setState({nome:'', tempo: '00:00:00'})
  }

  render(){
    return(
      <form 
        className={style.novaTarefa} 
        onSubmit={this.adicionarTarefa.bind(this)}
      >
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">
            Adicione um novo estudo!!
          </label>
          <input
            value={this.state.nome}
            onChange={evento=>{
              this.setState({
                ...this.state, 
                nome: evento.target.value
              })
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
            value={this.state.tempo}
            onChange={evento=>{
              this.setState({
                ...this.state, 
                tempo: evento.target.value
              })
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
}

export default Formulario;