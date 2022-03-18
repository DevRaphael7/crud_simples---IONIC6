import { InputForm } from '../../../../interface/input';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  @Input() inputs: Array<InputForm> = [];

  constructor() { }

  ngOnInit() {}

}