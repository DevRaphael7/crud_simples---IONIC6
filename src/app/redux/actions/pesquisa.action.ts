import { User } from './../models/usuario.model';
import { createAction, props } from "@ngrx/store";

export const setPesquisa = createAction('[SEARCH] user', props<{ payload: User[] }>());