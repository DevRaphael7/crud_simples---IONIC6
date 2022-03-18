import { AppState } from './state.model';
import { Action, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store"
import * as actions from '../actions/pesquisa.action';
import { User } from './../models/usuario.model';

export const estadoInicial: User[] = [
    {
        avatarImg: '',
        cursos: [1],
        dataDeNascimento: '22',
        email: '',
        id: 0,
        name: 'ww'
    }
];

const _pesquisaReducer = createReducer(
    [],
    on(actions.setPesquisa, (state, action) => { return state = action.payload })
)

export function pesquisaReducer(state: User[] = estadoInicial, action: Action) {
    return _pesquisaReducer(state, action);
}

export const getPesquisaState = createFeatureSelector<AppState[]>('pesquisaUsuario');

export const getUser = createSelector(
    getPesquisaState, 
    (state: AppState[]) => state
);