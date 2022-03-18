import { Curso } from "../models/curso.mode";
import { User } from "../models/usuario.model";

export interface AppState {
	users: User[]
    cursos: Curso[]
    img: string
    pesquisaUsuario: User[]
}