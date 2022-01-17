import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tabs/pagina-usuario/pagina-usuario.module').then(m => m.PaginaUsuarioPageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tabs/pagina-cursos/pagina-cursos.module').then(m => m.PaginaCursosPageModule)
      },
      {
        path: '',
        redirectTo: '../tabs/pagina-usuario/pagina-usuario',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '../tabs/pagina-usuario/pagina-usuario',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
