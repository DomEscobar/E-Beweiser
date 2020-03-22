import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthenticationGuard } from './authentication/authentication.guard';
import { SelectComponent } from './components/select/select.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    TranslateModule
  ],
  declarations: [SelectComponent],
  exports: [SelectComponent],
  providers: [
    AuthenticationGuard
  ]
})
export class CoreModule
{

  constructor(@Optional() @SkipSelf() parentModule: CoreModule)
  {
    // Import guard
    if (parentModule)
    {
      throw new Error(`${ parentModule } has already been loaded. Import Core module in the AppModule only.`);
    }
  }

}
