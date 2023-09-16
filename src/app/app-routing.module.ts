import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';

const routes: Routes = [
  {
    path:'dashboard',
    loadChildren:()=> import('./components/dashboard/dashboard.module').then((m)=>m.DashboardModule),
  },
  {
    path:'home',
    loadChildren:()=>import('./components/report/report.module').then((m)=>m.ReportModule),
  },
  {
    path:'register',
    loadChildren:()=>import('./components/user-register/user-register.module').then((m)=>m.UserRegisterModule),
  },
  {
    path:'login',
    loadChildren:()=>import('./components/login/login.module').then((m)=>m.LoginModule),
  },
  {path:'**',redirectTo:'login',pathMatch:'full'},
  {path:'',redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
