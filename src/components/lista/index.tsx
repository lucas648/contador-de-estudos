import { Tarefa } from "../../types/tarefa";
import Item from "./item";
import style from './lista.module.scss';

export default function  Lista({tarefas}:{tarefas: Tarefa[]}){

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