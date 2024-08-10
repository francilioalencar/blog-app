import { Type } from "@angular/core";


export type Pessoa ={
    id: number,
    name : string,
    interesse: string,
    foto: string,
    descricao: string,
    competencias: CompetenciaPublicacao[],

}


export type CompetenciaPublicacao ={
    competencia : string,
    descricao: string,
    url: string

}

