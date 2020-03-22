import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BlockstackService } from './services/blockstack.service';
import { Popup } from './static/popup/Popup';
import * as blockstack from 'blockstack';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent
{
  Popup = Popup;

  constructor(
    public BlockstackService: BlockstackService,
    private translate: TranslateService)
  {
    this.translate.setDefaultLang('de');
    this.translate.use(this.translate.getBrowserLang());
  }

  async ngOnInit()
  {
    if (this.BlockstackService.getUsersession().isUserSignedIn())
    {
      this.BlockstackService.initDocuments();
    }
  }
}
