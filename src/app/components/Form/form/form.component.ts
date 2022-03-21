import { InputForm } from '../../../interface/input';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { InputValues } from '../../inputForm/input-form/input-values';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  @Input() inputs: Array<InputForm> = [];
  @Output() enviarParaPai = new EventEmitter<any>();
  @Input() valorInput: string = '';

  private dadosDoForm: any = {}

  constructor() { }

  ngOnInit() {}

  criarJson(valor: InputValues){
    this.dadosDoForm[valor.key] = valor.value;
    this.enviarParaPai.emit(this.dadosDoForm);
  }

}
