import style from './botao.module.scss'

interface props{
  texto: string, 
  type?: "button" | "submit" | "reset" | undefined ,
  onClick?: ()=> void
}

export default function Botao({  
  texto, 
  type,
  onClick
}: props){
  return(
    <button 
      onClick={onClick}
      type={type ? type : 'button'}
      className={style.botao}
    >
      {texto} 
    </button>
  )
}