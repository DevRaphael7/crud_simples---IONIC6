import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {

  @Input() lista: any[] = []
  @Input() key: string = ''
  @Input() title: string = ''
  @Input() valor: string = ''
  @Output() valorFilho = new EventEmitter<any>();

  public cursos: number[] = []

  constructor() { }

  ngOnInit() {}

  mandarParaCompPai(){
    console.log(this.cursos)
    this.valorFilho.emit(this.cursos)
  }

}
