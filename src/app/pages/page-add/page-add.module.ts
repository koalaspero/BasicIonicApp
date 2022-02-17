import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageAddPageRoutingModule } from './page-add-routing.module';

import { PageAddPage } from './page-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageAddPageRoutingModule
  ],
  declarations: [PageAddPage]
})
export class PageAddPageModule {}
