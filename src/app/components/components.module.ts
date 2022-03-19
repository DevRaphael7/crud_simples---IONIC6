import { CardCursoComponent } from './lista-de-cursos/molecula/card-curso/card-curso.component';
import { ButtonCenterComponent } from './ButtonCenter/button-center/button-center.component';
import { SelectComponent } from './Select/select/select.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './Form/form/form.component';

import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaDeUsuarioComponent } from './listaDeUsuario/lista-de-usuario/lista-de-usuario.component';
import { ListaDeCursosComponent } from './lista-de-cursos/lista-de-cursos.component';
import { PhotoContainerComponent } from './photoContainer/photo-container/photo-container.component';
import { BackButtonComponent } from './backButtonHeader/back-button/back-button.component';
import { InputItemComponent } from './inputItem/input-item/input-item.component';
import { AddUserPromptComponent } from './addUserPrompt/add-user-prompt/add-user-prompt.component';
import { InputFormComponent } from './inputForm/input-form/input-form.component';



@NgModule({
  declarations: [
    ListaDeUsuarioComponent,
    ListaDeCursosComponent, 
    PhotoContainerComponent,
    BackButtonComponent,
    InputItemComponent,
    AddUserPromptComponent,
    InputFormComponent,
    FormComponent,
    SelectComponent,
    ButtonCenterComponent,
    CardCursoComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot({}),
    FormsModule
  ],
  exports: [
    ListaDeUsuarioComponent,
    ListaDeCursosComponent,
    PhotoContainerComponent,
    BackButtonComponent,
    InputItemComponent,
    AddUserPromptComponent,
    InputFormComponent,
    FormComponent,
    SelectComponent,
    ButtonCenterComponent,
    CardCursoComponent
  ]
})
export class ComponentsModule { }
