import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import * as actions from '../actions/avatarImg.action';

export const estadoInicial: string = '';

const _avatarImgReducer = createReducer(
    estadoInicial,
    on(actions.alterImg, (state, action) => { return state = action.payload})
)

export function avatarImgReducer(state: string = 'https://www.leadershipmartialartsct.com/wp-content/uploads/2017/04/default-image-620x600.jpg', action: Action) {
    return _avatarImgReducer(state, action);
}

//Obtêm somente o usuário
export const getImgState = createFeatureSelector<string>('img');

export const getImg = createSelector(
    getImgState, 
    (state: string) => state
); 