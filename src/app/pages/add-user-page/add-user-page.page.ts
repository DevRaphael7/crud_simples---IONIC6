import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { MaskPipe } from 'ngx-mask';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/redux/models/curso.mode';
import { User } from 'src/app/redux/models/usuario.model';
import { OpenCameraService } from 'src/app/services/openCamera/open-camera.service';
import { ReduxServiceService } from 'src/app/services/reduxService/redux-service.service';

@Component({
  selector: 'app-add-user-page',
  templateUrl: './add-user-page.page.html',
  styleUrls: ['./add-user-page.page.scss'],
})
export class AddUserPagePage implements OnInit {

  public txtDateUser: string;
  public txtImg: string;
  public txtNome: string;
  public cursos$: Observable<Curso[]>;
  public txtEmail: string;
  public txtCursos: number[];
  public total: string;

  constructor(
    private router: Router, 
    public maskPipe: MaskPipe, 
    private redux: ReduxServiceService, 
    public alertController: AlertController
    ){ }

  ngOnInit() {
    this.txtDateUser = '';
    this.txtImg = '';
    this.cursos$ = this.redux.getCursos();
    this.txtNome = '';
    this.txtEmail = '';
    this.txtCursos = [0];
  }

  async presentAlert(headerAlert: string, subTitulo: string, messageAlert: string) {
    const alert = await this.alertController.create({
      header: headerAlert,
      subHeader: subTitulo,
      message: messageAlert,
      buttons: ['OK']
    });

    await alert.present();
  }

  dateMaskInput(event) {
    if(this.txtDateUser.length > 10){
      this.txtDateUser = this.txtDateUser.slice(0, 10);
      return;
    }

    this.txtDateUser = this.maskPipe.transform(event.currentTarget.value , '00/00/0000');
  }

  idIncremental() {

    let id = 0;

    const listaDeUsuarios = this.redux.retornarUsuarioConvertido();

    listaDeUsuarios.map(value => {
      if(id < value.id){
        id = value.id;
      }
    });

    return id += 1;
  }

  adicionarUsuario() {

    if(this.txtNome.length === 0 || this.txtEmail.length === 0 || this.txtDateUser.length === 0 || this.txtCursos[0] === 0){
      alert('Campos vazio!');
      return;
    }

    if(this.txtCursos.length > 3){
      this.presentAlert('Inválido!', '', 'No máximo três cursos podem ser escolhidos!');
      return;
    }

    let img = '';
    this.redux.getImg().subscribe(value => img = value);

    const usuario: User = {
      avatarImg: img,
      dataDeNascimento: this.txtDateUser,
      email: this.txtEmail,
      id: this.idIncremental(),
      name: this.txtNome,
      cursos: this.txtCursos
    }

    this.redux.adicionarUsuario(usuario);
    this.presentAlert('Sucesso', 'usuário adicionado', `Usuário ${this.txtNome} adicionado com sucesso!`);
    this.router.navigate(['']);
  }

  totalAPagar() {

    let totalAPagar = 0;

   for(const item of this.txtCursos) {
    const teste = this.redux.retornarCursoConvertido().find(value => value.id === item);
    if(teste){
      totalAPagar += teste.preco;
    }
   }

    this.total = totalAPagar.toFixed(2).replace('.', ',');
  }
}
