import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-cursos',
  templateUrl: './pagina-cursos.page.html',
  styleUrls: ['./pagina-cursos.page.scss'],
})
export class PaginaCursosPage implements OnInit {

  constructor(public router: Router) { }

  goToAddCursos() {
    this.router.navigateByUrl('/add-curso');
  }

  ngOnInit() {
  }

}
