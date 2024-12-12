import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { guardGuard } from './guard/guard.guard';
import { PageNotfoundPage } from './page-notfound/page-notfound.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [guardGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  
  {
    path: 'alumno',
    loadChildren: () => import('./perfil/alumno/alumno.module').then( m => m.AlumnoPageModule),
    canActivate: [guardGuard] // Protege la ruta alumno para que solo pueda ser accedida por un usuario logueado
  },
  {
    path: 'docente',
    loadChildren: () => import('./perfil/docente/docente.module').then( m => m.DocentePageModule),
    canActivate: [guardGuard] // Protege la ruta docente para que solo pueda ser accedida por un usuario logueado
  },
  {
    path: '**', // Wildcard route for a 404 page not found
    loadChildren: () => import('./page-notfound/page-notfound.module').then( m => m.PageNotfoundPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
