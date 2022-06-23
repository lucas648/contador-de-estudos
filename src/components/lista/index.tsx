import React from "react";
import Item from "./item";
import style from './lista.module.scss';

export default function  Lista(){
  const tarefas = [
    {
      nome: 'React',
      tempo: '02:00:09'
    },
    {
      nome: 'JavaScript',
      tempo: '01:30:09'
    },
    {
      nome: 'TypeScript',
      tempo: '03:30:09'
    }
  ]
  return(
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item,index)=>(
          <Item 
            key={index}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}