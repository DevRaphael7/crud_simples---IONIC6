import { InputValues } from './input-values';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { MaskPipe } from 'ngx-mask';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss'],
})

export class InputFormComponent implements OnInit {

  @Input() titulo: string = "";
  @Output() dadosInput = new EventEmitter<InputValues>();
  @Input() placeholderValue: string = 'Valor';
  @Input() temMascara: boolean = true;
  @Input() mascara: string = '';
  @Input() tamanhoMaximo: number = 25;
  @Input() valorInput: string = null;

  constructor(public maskPipe: MaskPipe) {}

  ngOnInit(): void {}

  enviarDadosCompPai(texto) {
    let textoParam: string = texto.target.value;

    const dados: InputValues = {
      key: this.titulo,
      value: textoParam
    }

    if(this.temMascara) {
      textoParam = this.maskPipe.transform(textoParam , this.mascara);
      this.dadosInput.emit(dados);
      this.valorInput = textoParam;
      return;
    }
    this.dadosInput.emit(dados);
  }

  ngOnDestroy() {
    this.valorInput = ""
  }



}
