import { Action, createFeatureSelector, createReducer, on } from "@ngrx/store"
import { Curso } from "../models/curso.mode"
import * as actions from '../actions/curso.action'
import { cursoData } from "../data/curso.data"

export const estadoInicial : Curso[] = []

const _cursoReducer = createReducer(
    estadoInicial,
    on(actions.addCurso, (state, action) => { return [...state, action.payload] })
)

export function cursoReducer (state: Curso[] = cursoData, action: Action) {
    return _cursoReducer(state, action)
}

//Obtêm somente os cursos
export const getCursoState = createFeatureSelector<Curso[]>('curso')