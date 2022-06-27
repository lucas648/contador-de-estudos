
export interface Tarefa {
    nome: string,
    tempo: string,
    selecionado: boolean, 
    completado: boolean,
    id: string
}

export interface listaTarefas {
  tarefas: Tarefa[],
  selecionaTarefa: (tarefaSelecionada: Tarefa)=> void,
}

export interface itemTarefa extends Tarefa {
  selecionaTarefa: (tarefaSelecionada: Tarefa)=> void,
}