import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-curso',
  templateUrl: './card-curso.component.html',
  styleUrls: ['./card-curso.component.scss'],
})
export class CardCursoComponent implements OnInit {

  @Input() imagem: string = '';
  @Input() subtitleCard: string = ''
  @Input() title: string = ''

  constructor() { }

  ngOnInit() {}

}
