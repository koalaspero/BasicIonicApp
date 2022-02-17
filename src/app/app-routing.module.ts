import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'pages',
    pathMatch: 'full'
  },
  {
    path: 'pages',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/pages.module').then( m => m.PagesPageModule)
      },
      {
        path: ':pageId',
        loadChildren: () => import('./pages/page-detail/page-detail.module').then( m => m.PageDetailPageModule)
      }
    ]
  },
  {
    path: 'add',
    loadChildren: () => import('./pages/page-add/page-add.module').then( m => m.PageAddPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
