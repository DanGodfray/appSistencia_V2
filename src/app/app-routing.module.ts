import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'page-notfound',
    loadChildren: () => import('./page-notfound/page-notfound.module').then( m => m.PageNotfoundPageModule)
  },
  {
    path: 'alumno',
    loadChildren: () => import('./perfil/alumno/alumno.module').then( m => m.AlumnoPageModule)
  },
  {
    path: 'listado',
    loadChildren: () => import('./perfil/docente/listado/listado.module').then( m => m.ListadoPageModule)
  },
  {
    path: 'docente',
    loadChildren: () => import('./perfil/docente/docente.module').then( m => m.DocentePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }