import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { PageDBService } from '../page-db.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.page.html',
  styleUrls: ['./page-detail.page.scss'],
})
export class PageDetailPage implements OnInit {
  pg: any;

  constructor(private router: ActivatedRoute,private enrut: Router,protected pageDB: PageDBService, private alert: AlertController) { }

  ngOnInit() {
    this.router.paramMap.subscribe(paramMap => {
      const id = paramMap.get('pageId');
      this.pg = this.pageDB.getPage(+id);
    });
  }

  async delPage(){
    const alterElem = await this.alert.create({
      header: 'Are you sure about this action?',
      message: 'Be careful about your decision',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Confirm',
          handler: () => {
            this.pageDB.deletePage(this.pg.id);
            this.enrut.navigate(['/pages']);
          }
        }
      ]
    });
    await alterElem.present();
  }

}
