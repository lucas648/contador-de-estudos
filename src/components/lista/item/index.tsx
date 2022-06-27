import { itemTarefa } from '../../../types/tarefa';
import style from '../lista.module.scss'

export default function Item({
      nome, 
      tempo, 
      selecionado,
      completado,
      id,
      selecionaTarefa
    } : itemTarefa
){

  return(
    <li 
      className={`
        ${style.item} 
        ${selecionado ? style.itemSelecionado : ''}`
      } 
      onClick={()=>{
        selecionaTarefa({
          nome,
          tempo,
          selecionado,
          completado,
          id
        })
      }}
    >
      <h3>
        {nome}
      </h3>
      <span>
        {tempo}
      </span>
    </li>
  )
}