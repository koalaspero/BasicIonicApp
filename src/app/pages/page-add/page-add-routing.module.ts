import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageAddPage } from './page-add.page';

const routes: Routes = [
  {
    path: '',
    component: PageAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageAddPageRoutingModule {}
