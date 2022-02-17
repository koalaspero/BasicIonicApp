import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesPage } from './pages.page';

const routes: Routes = [
  {
    path: '',
    component: PagesPage
  },
  {
    path: 'page-detail',
    loadChildren: () => import('./page-detail/page-detail.module').then( m => m.PageDetailPageModule)
  },
  {
    path: 'page-add',
    loadChildren: () => import('./page-add/page-add.module').then( m => m.PageAddPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesPageRoutingModule {}
