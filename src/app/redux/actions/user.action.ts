import { createAction, props } from '@ngrx/store';
import { User } from '../models/usuario.model';

export const addUser = createAction('Add user', props<{ payload: User }>());
export const delUser = createAction('Del user', props<{ payload: number}>());
export const updateUser = createAction('Upd user', props<{ payload: User[] }>());

