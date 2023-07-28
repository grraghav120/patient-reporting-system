import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportComponent } from './components/report/report.component';

const routes: Routes = [
  {path:'home',component:ReportComponent},
  {path:'**',redirectTo:'home',pathMatch:'full'},
  {path:'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
