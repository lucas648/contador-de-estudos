import { listaTarefas } from "../../types/tarefa";
import Item from "./item";
import style from './lista.module.scss';

export default function  Lista(
  {tarefas, selecionaTarefa}: listaTarefas
){

  return(
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map(item=>(
          <Item 
            selecionaTarefa={selecionaTarefa}
            key={item.id}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}