import { createAction, props } from '@ngrx/store';

export const alterImg = createAction('add_img', props<{ payload: string}>());