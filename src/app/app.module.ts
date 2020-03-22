import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingComponent } from './static/loading/loading.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LoginComponent } from './modules/login/login.component';
import { CurfewComponent } from './modules/formTypes/curfew/curfew.component';
import { NewFormComponent } from './modules/newform/new-form.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { NavigationComponent } from './static/navigation/navigation.component';
import { AboutMeComponent } from './modules/about-me/about-me.component';
import { CheckPopupComponent } from './static/check-popup/check-popup.component';
import { TypeSelectionComponent } from './modules/newform/type-selection/type-selection.component';
import { NewFormFooterComponent } from './modules/newform/new-form-footer/new-form-footer.component';
import { FormContentComponent } from './modules/newform/form-content/form-content.component';
import { FormProofComponent } from './modules/newform/form-proof/form-proof.component';
import { SignaturePadModule } from 'ngx-signaturepad';
import { DocumentDetailComponent } from './modules/document-detail/document-detail.component';
import { MomentModule } from 'ngx-moment';
import { DocumentsComponent } from './modules/documents/documents.component';
import { FocusDirective } from './core/components/select/focus.directive';
import * as crypto from "crypto";

export function createTranslateLoader(http: HttpClient)
{
  return new TranslateHttpLoader(http, './assets/translation/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    LoginComponent,
    CurfewComponent,
    NewFormComponent,
    DashboardComponent,
    NavigationComponent,
    AboutMeComponent,
    CheckPopupComponent,
    TypeSelectionComponent,
    NewFormFooterComponent,
    FormContentComponent,
    FormProofComponent,
    DocumentDetailComponent,
    DocumentsComponent,
    FocusDirective
  ],
  imports: [
    MomentModule,
    SignaturePadModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forChild(),
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
