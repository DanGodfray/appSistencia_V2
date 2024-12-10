import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrAsignaturaPageRoutingModule } from './qr-asignatura-routing.module';

import { QrAsignaturaPage } from './qr-asignatura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrAsignaturaPageRoutingModule
  ],
  declarations: [QrAsignaturaPage]
})
export class QrAsignaturaPageModule {}
