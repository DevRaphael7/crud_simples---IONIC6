import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCursoPageRoutingModule } from './add-curso-routing.module';

import { AddCursoPage } from './add-curso.page';
import { MaskPipe } from 'ngx-mask';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCursoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AddCursoPage],
  providers: [MaskPipe]
})
export class AddCursoPageModule {}
