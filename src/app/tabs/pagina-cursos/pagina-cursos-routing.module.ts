import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaCursosPage } from './pagina-cursos.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaCursosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaCursosPageRoutingModule {}
