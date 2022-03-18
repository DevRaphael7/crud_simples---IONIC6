import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaDeUsuarioComponent } from './listaDeUsuario/lista-de-usuario/lista-de-usuario.component';
import { ListaDeCursosComponent } from './lista-de-cursos/lista-de-cursos.component';
import { PhotoContainerComponent } from './photoContainer/photo-container/photo-container.component';
import { BackButtonComponent } from './backButtonHeader/back-button/back-button.component';
import { InputItemComponent } from './inputItem/input-item/input-item.component';
import { AddUserPromptComponent } from './addUserPrompt/add-user-prompt/add-user-prompt.component';



@NgModule({
  declarations: [
    ListaDeUsuarioComponent,
    ListaDeCursosComponent, 
    PhotoContainerComponent,
    BackButtonComponent,
    InputItemComponent,
    AddUserPromptComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot({})
  ],
  exports: [
    ListaDeUsuarioComponent,
    ListaDeCursosComponent,
    PhotoContainerComponent,
    BackButtonComponent,
    InputItemComponent,
    AddUserPromptComponent
  ]
})
export class ComponentsModule { }
