import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportComponent } from './components/report/report.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';

const routes: Routes = [
  {path:'home',component:ReportComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'admin',component:AdminDashboardComponent},
  {path:'register',component:UserRegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'**',redirectTo:'login',pathMatch:'full'},
  {path:'',redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
