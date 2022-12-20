export interface Disciplina{
   id: number
    name:string
    start_date:string
    end_date: string
    shift: string
}

export interface DisciplinaAssuntos{
  id:number
  name:string
  topics:Topics[]
}

interface Topics{
  id:number
  name:string
}


