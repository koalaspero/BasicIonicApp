import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageDBService } from './page-db.service';
import {Page} from './page.model';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.page.html',
  styleUrls: ['./pages.page.scss'],
})
export class PagesPage implements OnInit {

  pages: Page[];

  constructor(private pg: PageDBService, private router: Router) {
  }

  ngOnInit(): void {
    this.pages = this.pg.getPages();
  }

  ionViewWillEnter(){
    this.pages = this.pg.getPages();
  }

  addNewPage(){
    this.router.navigate(['/add']);
  }

}
