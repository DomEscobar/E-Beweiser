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
    private BlockstackService: BlockstackService) { }

  ngAfterViewInit(): void
  {
    if (this.BlockstackService.getUsersession().isUserSignedIn())
    {
      this.router.navigate(['/documents']);
    }
  }

  public signIn()
  {
    const authOptions = {
      redirectTo: 'https://nokol.net/ebeweiser',
      userSession: this.BlockstackService.getUsersession(),
      finished: async ({ userSession }) =>
      {
        this.BlockstackService.user = userSession.loadUserData();
        await this.BlockstackService.initDocuments();
        this.router.navigate(['/documents']);
      },
      manifestPath: 'https://nokol.net/ebeweiser',
      appDetails: {
        name: 'E - Beweiser',
        icon: 'https://nokol.net/ebeweiser/assets/start.png',
      },
    };

    showBlockstackConnect(authOptions);
  }

}
