import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  @Input() title: string = 'Usuários';

  constructor(
    private redux: ReduxServiceService,
    private router: Router
  ) { }

  ngOnInit() { }

  apagarUsuario(id: number) {
    this.redux.apagarUsuario(id);
  }

  goToEditUserPage(id: number) {
    this.router.navigate([`edit-user/${id}`]);
  }
}
