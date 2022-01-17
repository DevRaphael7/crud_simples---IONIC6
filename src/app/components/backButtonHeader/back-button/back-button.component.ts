import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
})
export class BackButtonComponent implements OnInit {
  @Input() title: string = 'Título';
  @Input() route: string = '';

  constructor(public router: Router) { }

  ngOnInit() {}

  backButton(){
    this.router.navigate(['']);
  }

}
