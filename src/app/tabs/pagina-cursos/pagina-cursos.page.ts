import { Observable } from 'rxjs';
import { Curso } from './../../redux/models/curso.mode';
import { ReduxServiceService } from './../../services/reduxService/redux-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-cursos',
  templateUrl: './pagina-cursos.page.html',
  styleUrls: ['./pagina-cursos.page.scss'],
})
export class PaginaCursosPage implements OnInit {

  public $listaDeCursos: Observable<Curso[]>;
  public keyCursos: string[] = ['img', 'preco', 'name', 'id']

  constructor(private redux: ReduxServiceService, public router: Router) { 
    this.$listaDeCursos = redux.getCursos();
  }

  ngOnInit() {}

  converterPrecoParaFormatoBrasileiro(preco: number): string {
    return preco.toFixed(2).replace('.', ',');
  }

  goToDetailPage(id) {
    console.log(id)
    this.router.navigate([`detail/${id}`]);
  }

}
