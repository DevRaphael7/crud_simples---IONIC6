import { createAction, props } from "@ngrx/store";
import { Curso } from "../models/curso.mode";

export const addCurso = createAction('Add_curso', props<{ payload: Curso}>());