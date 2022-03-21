import { formInputs } from './form';
import { ActivatedRoute } from '@angular/router';
import { ReduxServiceService } from './../../../services/reduxService/redux-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/redux/models/usuario.model';
import { InputForm } from 'src/app/interface/input';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.page.html',
  styleUrls: ['./edit-user.page.scss'],
})
export class EditUserPage implements OnInit {

  private usuario: User = null;
  public formulario: Array<InputForm>;
  public valoresCampos: any;
  public avatarImagem: string;

  constructor(
    private redux: ReduxServiceService,
    public routeParam: ActivatedRoute
  ) { 
    this.formulario = formInputs;
    this.buscarUsuario(this.routeParam.snapshot.paramMap.get('id'));
  }

  ngOnInit() {}

  buscarUsuario(id: string){
    this.redux.getUsers().pipe().subscribe(value => {
      value.map(item => {
        if(item.id === Number(id)){
          this.usuario = item;
        }
      });
    });
  }

  atualizarUsuario() {
    this.redux.getImg().pipe().subscribe(value => this.avatarImagem = value);
    const novaLista: User[] = [];

    this.redux.getImg().subscribe(value => this.avatarImagem = value);

    this.usuario = {
      avatarImg: this.avatarImagem,
      cursos: this.usuario.cursos,
      dataDeNascimento: this.usuario.dataDeNascimento,
      email: this.valoresCampos['E-mail'],
      name: this.valoresCampos['Nome'],
      id: this.usuario.id
    };

    this.redux.getUsers().pipe().subscribe(value => {
      value.map(item => {
        if(item.id !== this.usuario.id){
          novaLista.push(item);
        } else {
          novaLista.push(this.usuario);
        }
      });
    });

    this.redux.atualizarUsuario(novaLista);
  }

  receberValoresDoFormulario(value: any){
    this.valoresCampos = value;
  }

}
