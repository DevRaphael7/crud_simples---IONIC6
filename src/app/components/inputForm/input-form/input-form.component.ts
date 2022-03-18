import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { MaskPipe } from 'ngx-mask';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss'],
})

export class InputFormComponent implements OnInit {

  @Input() titulo: string = "";
  @Output() dadosInput = new EventEmitter<string>();
  @Input() placeholderValue: string = 'Valor';
  @Input() temMascara: boolean = false;
  @Input() mascara: string = '';

  constructor(public maskPipe: MaskPipe) {}

  ngOnInit(): void {}

  enviarDadosCompPai(texto) {
    let textoParam: string = texto.target.value;

    if(this.temMascara) {
      textoParam = this.maskPipe.transform(textoParam , this.mascara);
      this.dadosInput.emit(textoParam);
      return;
    }

    this.dadosInput.emit(textoParam);
  }

  // dateMaskInput(event) {
  //   if(this.txtDateUser.length > 10){
  //     this.txtDateUser = this.txtDateUser.slice(0, 10);
  //     return;
  //   }
  // }

}
