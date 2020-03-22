import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BlockstackService } from '../../services/blockstack.service';

@Injectable()
export class AuthenticationGuard implements CanActivate
{
  constructor(
    private BlockstackService: BlockstackService,
    private router: Router) { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean>
  {
    if (this.BlockstackService.user == null && this.BlockstackService.getUsersession().isUserSignedIn())
    {
      this.BlockstackService.user = this.BlockstackService.getUsersession().loadUserData();
    }

    return true;
  }

  private showInit(state: RouterStateSnapshot): void
  {
    this.router.navigate(['/init'], { queryParams: { redirect: state.url }, replaceUrl: true });
  }
}
