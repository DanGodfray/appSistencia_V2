import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrAsignaturaPage } from './qr-asignatura.page';

const routes: Routes = [
  {
    path: '',
    component: QrAsignaturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrAsignaturaPageRoutingModule {}
