import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AddUserPromptComponent } from 'src/app/components/addUserPrompt/add-user-prompt/add-user-prompt.component';
import { Curso } from 'src/app/redux/models/curso.mode';
import { User } from 'src/app/redux/models/usuario.model';
import { ReduxServiceService } from 'src/app/services/reduxService/redux-service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  public txtImg: string;
  public txtNome: string;
  public txtPreco: string;
  public usuariosQueFazemOCurso: User[] = [];

  constructor(public routeParam: ActivatedRoute, public redux: ReduxServiceService, private router: Router, private modal: ModalController) { }

  ngOnInit() {
    this.getCursoById();
  }

  backButton(){
    this.router.navigate(['']);
  }

  getIdParam() {
    const id = this.routeParam.snapshot.paramMap.get('id');
    return Number(id);
  }

  getCursoById(){
    const dados = this.redux.retornarCursoConvertido().find(value => value.id === this.getIdParam());

    if(!dados){
      alert('Curso não encontrado!');
      return;
    }

    this.atribuirOsValores(dados);
  }

  atribuirOsValores(dados: Curso) {
    this.txtImg = dados.img;
    this.txtNome = dados.name;
    this.txtPreco = dados.preco.toFixed(2).replace('.', ',');

    this.redux.retornarUsuarioConvertido().map(value => {
      for(const item of value.cursos) {
        if(item === this.getIdParam()) {
          this.usuariosQueFazemOCurso.push(value);
        }
      }
    });
  }

  async openModalAddUserPrompt() {
    const modalPage = await this.modal.create({
      cssClass: 'transparent-modal',
      component: AddUserPromptComponent,
      componentProps: {
        txtEmail: '',
        id: this.getIdParam()
      }
    });

    return await modalPage.present();
  }

  pesquisarUsuarios() {
    let newSearchState: User[] = [];
    this.redux.getUsers().pipe().subscribe(value => {
      value.map(usuario => {
        usuario.cursos.map(idCurso => {
          if(idCurso === this.getIdParam()){
            newSearchState.push(usuario)
          }
        })
      })
    });

    // console.log(newSearchState)

    this.redux.adicionarPesquisa(newSearchState)

    this.redux.getSearch().pipe().subscribe(value => {
      console.log(value)
    });

    return this.redux.getUsers()
  }

}
