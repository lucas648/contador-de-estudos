import Botao from "../botao";
import Relogio from "./relogio";
import style from './Cronometro.module.scss'

export default function Cronometro() {
  return(
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um Card e inicie o Cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio/>
      </div>
      <Botao
        texto="Começar"
      />
    </div>
  )
}