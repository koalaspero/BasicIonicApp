import { Component, OnInit } from '@angular/core';
import { PageDBService } from '../page-db.service';

@Component({
  selector: 'app-page-add',
  templateUrl: './page-add.page.html',
  styleUrls: ['./page-add.page.scss'],
})
export class PageAddPage implements OnInit {

  constructor(private pageDB: PageDBService) { }

  ngOnInit() {
  }

  saveNewPage(name,link,text){
    this.pageDB.addPage(link.value, name.value, text.value);
  }
}
