import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import * as actions from '../actions/avatarImg.action';

export const estadoInicial: string = '';

const _avatarImgReducer = createReducer(
    estadoInicial,
    on(actions.alterImg, (state, action) => { return state = action.payload})
)

export function avatarImgReducer(state: string = 'https://th.bing.com/th/id/OIP.FFtfLrdjG5QKDAB3afClfAHaEo?w=265&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7', action: Action) {
    return _avatarImgReducer(state, action);
}

//Obtêm somente o usuário
export const getImgState = createFeatureSelector<string>('img');