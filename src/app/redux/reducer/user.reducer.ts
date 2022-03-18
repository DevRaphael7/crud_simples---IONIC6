import { AppState } from './state.model';
import { Action, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { User } from '../models/usuario.model';
import * as actions from '../actions/user.action';
import { usersData } from '../data/user.data';

export const estadoInicial: User[] = [];

const _userReducer = createReducer(
    estadoInicial,
    on(actions.addUser, (state, action) => { return [...state, action.payload] }),
    on(actions.delUser, (state, action) => { return state = state.filter(value => value.id != action.payload)}),
    on(actions.updateCurso, (state, action) => { return state = action.payload })
)

export function userReducer(state: User[] = usersData, action: Action) {
    return _userReducer(state, action);
}

//Obtêm somente o usuário
export const getUserState = createFeatureSelector<AppState[]>('users');

export const getUser = createSelector(
    getUserState, 
    (state: AppState[]) => state
); 