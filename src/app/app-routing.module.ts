import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './controllers/dashboard/dashboard.component';
import { AuthguardService } from './services/authguard/authguard.service';

const routes: Routes = [

  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthguardService] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
