import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-item',
  templateUrl: './input-item.component.html',
  styleUrls: ['./input-item.component.scss'],
})
export class InputItemComponent implements OnInit {
  @Input() txtInput: string;
  @Input() nome: string;
  @Input() placeholder: string;

  constructor() { }

  ngOnInit() {}

}
