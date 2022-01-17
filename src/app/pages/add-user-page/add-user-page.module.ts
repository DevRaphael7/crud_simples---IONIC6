import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddUserPagePageRoutingModule } from './add-user-page-routing.module';

import { AddUserPagePage } from './add-user-page.page';
import { MaskPipe } from 'ngx-mask';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddUserPagePageRoutingModule,
    ComponentsModule
  ],
  declarations: [AddUserPagePage],
  providers: [MaskPipe]
})
export class AddUserPagePageModule {}
