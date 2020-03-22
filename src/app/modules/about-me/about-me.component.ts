import { Component, OnInit } from '@angular/core';
import { BlockstackService } from '../../services/blockstack.service';
import { User } from '../../models/user';
import { Popup } from '../../static/popup/Popup';
import { Loading } from '../../static/loading/Loading';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.less']
})
export class AboutMeComponent implements OnInit
{
  user: User = new User();

  constructor(
    private router: Router,
    private BlockstackService: BlockstackService) { }

  async ngOnInit()
  {
    Loading.show();
    const user = await this.BlockstackService.getUser();
    Loading.hide();
    
    if (!user)
    {
      return;
    }

    this.user = user;
  }

  public async save(): Promise<void>
  {
    Loading.show();
    await this.BlockstackService.setUser(this.user);
    Loading.hide();
    Popup.saveCheck();
  }

  public logout(): void
  {
    this.BlockstackService.getUsersession().signUserOut();
    this.BlockstackService.user = null;
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
