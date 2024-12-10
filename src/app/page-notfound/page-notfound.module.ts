import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageNotfoundPageRoutingModule } from './page-notfound-routing.module';

import { PageNotfoundPage } from './page-notfound.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageNotfoundPageRoutingModule
  ],
  declarations: [PageNotfoundPage]
})
export class PageNotfoundPageModule {}
