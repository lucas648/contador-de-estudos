import React from "react";
import style from './botao.module.scss'

class Botao extends React.Component<{
  texto: string, 
  type?: "button" | "submit" | "reset" | undefined ,
  onClick?: ()=> void
}> {
  render(){
    const {texto, type , onClick} = this.props;
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
}

export default Botao;