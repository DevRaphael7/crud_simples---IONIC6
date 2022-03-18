import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/redux/models/usuario.model';
import { ReduxServiceService } from 'src/app/services/reduxService/redux-service.service';

@Component({
  selector: 'app-lista-de-usuario',
  templateUrl: './lista-de-usuario.component.html',
  styleUrls: ['./lista-de-usuario.component.scss'],
})
export class ListaDeUsuarioComponent implements OnInit {
  @Input() listaDeUsuarios: Observable<User[]> = this.redux.getUsers();

  constructor(private redux: ReduxServiceService) { }

  ngOnInit() { }

  apagarUsuario(id: number) {
    this.redux.apagarUsuario(id);
  }

  atualizarUsuario(id: number) {
    let novaLista: User[] = []
    let valor = {
      avatarImg: 'AA',
      cursos: [1],
      dataDeNascimento: '22',
      email: '22',
      id: id,
      name: '1'
    }
    

    this.listaDeUsuarios.pipe().subscribe(value => {
      value.map(item => {
        if(item.id !== id){
          novaLista.push(item)
        } else {
          novaLista.push(valor)
        }
      })
    })

    this.redux.atualizarUsuario(novaLista)
  }

}
