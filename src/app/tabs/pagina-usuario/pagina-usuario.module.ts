import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaUsuarioPageRoutingModule } from './pagina-usuario-routing.module';

import { PaginaUsuarioPage } from './pagina-usuario.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaUsuarioPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PaginaUsuarioPage]
})
export class PaginaUsuarioPageModule {}
