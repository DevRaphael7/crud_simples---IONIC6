import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Curso } from '../../redux/models/curso.mode';
import { User } from '../../redux/models/usuario.model';
import { AppState } from '../../redux/reducer/state.model';

@Injectable({
  providedIn: 'root'
})
export class ReduxServiceService {

  private listaDeUsuarios: Observable<User[]>;
  private listaDosCursos: Observable<Curso[]>;
  private img: Observable<string>;
  private pesquisa: Observable<User[]>;

  constructor(private store: Store<AppState>) { 
    this.listaDeUsuarios = store.select(getUser => getUser.users);
    this.listaDosCursos = store.select(getCurso => getCurso.cursos);
    this.img = store.select(getImgState => getImgState.img);
    this.pesquisa = store.select(getUser => getUser.pesquisaUsuario);
  }

  getUsers(): Observable<User[]> {
    return this.listaDeUsuarios;
  }

  getCursos() : Observable<Curso[]> {
    return this.listaDosCursos;
  }

  getImg(): Observable<string> {
    return this.img;
  }

  getSearch(): Observable<User[]> {
    return this.pesquisa
  }

  adicionarUsuario(values: User) {
    this.store.dispatch({
      type: 'Add user',
      payload: values
    });
  }

  retornarUsuarioConvertido() {
    let lista: User[] = [];

    this.getUsers().subscribe(value => lista = value);
    return lista;
  }

  retornarCursoConvertido() {

    let lista: Curso[] = [];

    this.getCursos().subscribe(value => lista = value);

    return lista;
  }

  apagarUsuario(idUser: number) {
    this.store.dispatch({
      type: 'Del user',
      payload: idUser
    });
  }

  adicionarCurso(curso: Curso) {
    this.store.dispatch({
      type: 'Add_curso',
      payload: curso
    });
  }

  adicionarImg(img: string) {
    this.store.dispatch({
      type: 'add_img',
      payload: img
    });
  }

  atualizarUsuario(newState: User[]) {
    this.store.dispatch({
      type: 'Upd user-curso',
      payload: newState
    });
  }

  adicionarPesquisa(search: User[]) {
    this.store.dispatch({
      type: '[SEARCH] user',
      payload: search
    })
  }
}
