import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-usuario',
  templateUrl: './pagina-usuario.page.html',
  styleUrls: ['./pagina-usuario.page.scss'],
})
export class PaginaUsuarioPage implements OnInit {

  constructor(public router: Router) { }

  goToAddUser() {
    this.router.navigateByUrl('add-user-page');
  }

  ngOnInit() {
  }

}
