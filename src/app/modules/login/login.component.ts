import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BlockstackService } from '../../services/blockstack.service';
import { showBlockstackConnect } from '@blockstack/connect';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements AfterViewInit
{

  constructor(
    private router: Router,
    private BlockstackService: BlockstackService)
  {
  }

  async ngOnInit()
  {
    if (this.BlockstackService.getUsersession().handlePendingSignIn())
    {
      this.BlockstackService.user = this.BlockstackService.getUsersession().loadUserData();
      await this.BlockstackService.initDocuments();
      this.router.navigate(['/documents']);
    }
  }

  ngAfterViewInit(): void
  {
    setTimeout(async () =>
    {
      if (this.BlockstackService.getUsersession().isUserSignedIn())
      {
        this.BlockstackService.user = this.BlockstackService.getUsersession().loadUserData();
        await this.BlockstackService.initDocuments();
        this.router.navigate(['/documents']);
      }
    }, 1000);
  }

  public signIn()
  {
    const authOptions = {
      redirectTo: '/ebeweiser',
      userSession: this.BlockstackService.getUsersession(),
      finished: async ({ userSession }) =>
      {
        this.BlockstackService.user = userSession.loadUserData();
        await this.BlockstackService.initDocuments();
        this.router.navigate(['/documents']);
      },
      manifestPath: 'https://e-beweiser-b1ezxl3gc-domescobar.vercel.app/ebeweiser',
      appDetails: {
        name: 'E - Beweiser',
        icon: 'https://e-beweiser-b1ezxl3gc-domescobar.vercel.app/assets/start.png',
      },
    };

    showBlockstackConnect(authOptions);
  }

}
