import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { NewFormComponent } from './modules/newform/new-form.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { AuthenticationGuard } from './core/authentication/authentication.guard';
import { AboutMeComponent } from './modules/about-me/about-me.component';
import { DocumentsComponent } from './modules/documents/documents.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthenticationGuard]
  }, {
    path: 'new',
    component: NewFormComponent,
    canActivate: [AuthenticationGuard]
  }, {
    path: 'documents',
    component: DocumentsComponent,
    canActivate: [AuthenticationGuard]
  }, {
    path: '',
    component: LoginComponent
  }, {
    path: 'about',
    component: AboutMeComponent,
    canActivate: [AuthenticationGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
