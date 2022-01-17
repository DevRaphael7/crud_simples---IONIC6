import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ReduxServiceService } from 'src/app/services/reduxService/redux-service.service';

@Component({
  selector: 'app-add-user-prompt',
  templateUrl: './add-user-prompt.component.html',
  styleUrls: ['./add-user-prompt.component.scss'],
})
export class AddUserPromptComponent implements OnInit {

  public txtEmail: string;
  private id: number;

  constructor(private modalController: ModalController, private redux: ReduxServiceService) { 
  }

  ngOnInit() {
    this.txtEmail = '';
    alert(this.id);
  }

  escreverEmail(event){
    this.txtEmail = event.target.value;
  }

  modalDismiss(){
    this.modalController.dismiss();
  }

  atualizarUsuario() {
    console.log(this.txtEmail);
    this.redux.atualizarUsuario(this.txtEmail, this.id);
  }

}
