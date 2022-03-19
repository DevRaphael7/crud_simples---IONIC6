import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
  
  @Input() keys: string[] = [];
  @Input() lista: Array<any> = [];
  @Input() title: string = 'Cursos';
  @Output() clicked = new EventEmitter<string>();

  constructor(private redux: ReduxServiceService, public router: Router) { }

  ngOnInit() { }

  emitirEvento(valor: string) {
    this.clicked.emit(valor);
  }

}
