import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrAsignaturaPageRoutingModule } from './qr-asignatura-routing.module';

import { QrAsignaturaPage } from './qr-asignatura.page';

import { QRCodeComponent } from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrAsignaturaPageRoutingModule,
    QRCodeComponent
  ],
  declarations: [QrAsignaturaPage]
})
export class QrAsignaturaPageModule {}
