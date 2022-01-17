import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getImgState } from 'src/app/redux/reducer/avatarImg.reducer';
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

  constructor(private store: Store<AppState>) { 
    this.listaDeUsuarios = store.select(getUser => getUser.users);
    this.listaDosCursos = store.select(getCurso => getCurso.cursos);
    this.img = store.select(getImgState);
  }

  printUsers(){
    this.listaDeUsuarios.subscribe(value => console.log(value));
  }

  printCursos() {
    this.listaDosCursos.subscribe(value => console.log(value));
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

  atualizarUsuario(emailUser: string, id: number) {
    this.store.dispatch({
      type: 'Upd user-curso',
      payload: {
        email: emailUser,
        valor: id
      }
    });
  }
}
