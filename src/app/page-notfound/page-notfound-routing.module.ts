import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotfoundPage } from './page-notfound.page';

const routes: Routes = [
  {
    path: '',
    component: PageNotfoundPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageNotfoundPageRoutingModule {}
