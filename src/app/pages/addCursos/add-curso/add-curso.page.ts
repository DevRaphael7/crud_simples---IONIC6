import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MaskPipe } from 'ngx-mask';
import { Curso } from 'src/app/redux/models/curso.mode';
import { ReduxServiceService } from 'src/app/services/reduxService/redux-service.service';

@Component({
  selector: 'app-add-curso',
  templateUrl: './add-curso.page.html',
  styleUrls: ['./add-curso.page.scss'],
})
export class AddCursoPage implements OnInit {

  public txtNome: string;
  public txtPreco: string;
  public txtImg: string;

  constructor(
    private maskPipe: MaskPipe,
    private store: ReduxServiceService, 
    private router: Router, 
    public alertController: AlertController,
    private redux: ReduxServiceService
    ) { }

  ngOnInit() {
    this.txtPreco = '';
    this.txtImg = '';
  }

  mascaraPreco(event){
    this.txtPreco = this.maskPipe.transform(event.currentTarget.value , '000,00');
  }

  adicionarCurso() {

    if(this.txtPreco.length === 0 || this.txtNome.length === 0){
      alert('Campos vazios!');
      return;
    }

    if(Number.isNaN(Number(this.txtPreco))){
      alert('Preço inválido!');
      return;
    }

    let imgC = '';
    this.redux.getImg().subscribe(value => imgC = value);

    const novoCurso: Curso = {
      id: this.idIncremental(),
      img: imgC,
      name: this.txtNome,
      preco: Number(this.txtPreco)
    }

    this.store.adicionarCurso(novoCurso);
    this.presentAlert('Sucesso', 'curso adicionado', `Curso ${this.txtNome} adicionado com sucesso!`);
    this.router.navigate(['']);
  }

  async presentAlert(headerAlert: string, subTitulo: string, messageAlert: string) {
    const alert = await this.alertController.create({
      // cssClass: 'my-custom-class',
      header: headerAlert,
      subHeader: subTitulo,
      message: messageAlert,
      buttons: ['OK']
    });

    await alert.present();
  }

  idIncremental(): number {

    let id = 0;

    this.store.retornarCursoConvertido().map(value => {
      if(value.id > id){
        id = value.id;
      }
    });

    return id += 1;
  }

}
