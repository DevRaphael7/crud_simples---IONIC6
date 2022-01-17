import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaUsuarioPage } from './pagina-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaUsuarioPageRoutingModule {}
