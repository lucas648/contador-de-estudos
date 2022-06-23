import style from '../lista.module.scss'

export default function Item(
    props: {
      nome: string, 
      tempo: string, 
      selecionado:boolean,
      completado: boolean,
      id: string
    }
){

  const {nome, tempo } = props;

  return(
    <li className={style.item}>
      <h3>
        {nome}
      </h3>
      <span>
        {tempo}
      </span>
    </li>
  )
}