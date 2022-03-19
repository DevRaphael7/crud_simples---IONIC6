import { AppState } from './state.model';
import { Action, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store"
import * as actions from '../actions/pesquisa.action';
import { User } from './../models/usuario.model';

const _pesquisaReducer = createReducer(
    [],
    on(actions.setPesquisa, (state, action) => { return state = action.payload })
)

export function pesquisaReducer(state: User[] = [], action: Action) {
    return _pesquisaReducer(state, action);
}

export const getPesquisaState = createFeatureSelector<User[]>('pesquisaUsuario');