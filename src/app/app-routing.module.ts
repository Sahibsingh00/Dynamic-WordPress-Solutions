import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { MyAccountComponent } from './core/my-account/my-account.component';

const routes: Routes = [
  { path: 'login', component : LoginComponent },
  { path: 'my-account', component : MyAccountComponent },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'page', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  { path: '', redirectTo: '/page/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/page/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
