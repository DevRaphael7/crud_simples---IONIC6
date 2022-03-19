import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button-center',
  templateUrl: './button-center.component.html',
  styleUrls: ['./button-center.component.scss'],
})
export class ButtonCenterComponent implements OnInit {

  @Output() clicked = new EventEmitter<void>();
  @Input() espacoTop: number = 10
  @Input() text: string = 'Adicionar'
  @Input() iconName: string = 'person-add-sharp'

  constructor() { }

  ngOnInit() {}

  emitirEvento(){
    this.clicked.emit();
  }

}
