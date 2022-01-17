import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/redux/models/curso.mode';
import { ReduxServiceService } from 'src/app/services/reduxService/redux-service.service';

@Component({
  selector: 'app-lista-de-cursos',
  templateUrl: './lista-de-cursos.component.html',
  styleUrls: ['./lista-de-cursos.component.scss'],
})
export class ListaDeCursosComponent implements OnInit {

  public listaDeCursos: Observable<Curso[]>;

  constructor(private redux: ReduxServiceService, public router: Router) { }

  ngOnInit() {
    this.listaDeCursos = this.redux.getCursos();
  }

  converterPrecoParaFormatoBrasileiro(preco: number): string {
    return preco.toFixed(2).replace('.', ',');
  }

  goToDetailPage(id: number) {
    this.router.navigate([`detail/${id}`]);
  }

}
