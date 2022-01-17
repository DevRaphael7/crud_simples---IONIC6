import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddUserPagePage } from './add-user-page.page';

const routes: Routes = [
  {
    path: '',
    component: AddUserPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddUserPagePageRoutingModule {}
