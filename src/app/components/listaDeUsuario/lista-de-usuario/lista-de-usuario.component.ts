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
  @Input() eObjeto: boolean;
  @Input() listaDeUsuariosObjeto: any;


  constructor(private redux: ReduxServiceService) { }

  apagarUsuario(id: number) {
    this.redux.apagarUsuario(id);
  }

  ngOnInit() { }

}
