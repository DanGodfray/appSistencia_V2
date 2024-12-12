import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocentePage } from './docente.page';

const routes: Routes = [
  {
    path: '',
    component: DocentePage
  },
  {
    path: 'listado',
    loadChildren: () => import('./listado/listado.module').then( m => m.ListadoPageModule)
  },
  {
    path: 'qr-asignatura',
    loadChildren: () => import('./qr-asignatura/qr-asignatura.module').then( m => m.QrAsignaturaPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocentePageRoutingModule {}
