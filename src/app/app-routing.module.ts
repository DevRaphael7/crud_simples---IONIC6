import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: '/home/tab1',
    pathMatch: 'full'
  },
  {
    path: 'pagina-usuario',
    loadChildren: () => import('./tabs/pagina-usuario/pagina-usuario.module').then( m => m.PaginaUsuarioPageModule)
  },
  {
    path: 'pagina-cursos',
    loadChildren: () => import('./tabs/pagina-cursos/pagina-cursos.module').then( m => m.PaginaCursosPageModule)
  },
  {
    path: 'add-user-page',
    loadChildren: () => import('./pages/add-user-page/add-user-page.module').then( m => m.AddUserPagePageModule)
  },
  {
    path: 'add-curso',
    loadChildren: () => import('./pages/addCursos/add-curso/add-curso.module').then( m => m.AddCursoPageModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./pages/DetailPage/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: `edit-user/:id`,
    loadChildren: () => import('./pages/EditUser/edit-user/edit-user.module').then( m => m.EditUserPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
