import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  <share-button [url]="socialURL" [theme]="'material-dark'" [button]="'linkedin'" [size]="-5" [autoSetMeta]="false">
  </share-button>

  constructor() {}

}
