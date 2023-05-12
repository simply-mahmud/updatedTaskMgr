import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "./core/page-not-found/page-not-found.component";
import {LoginComponent} from "./core/login/login.component";
import {DashboardComponent} from "./feature/dashboard/dashboard.component";
import {AuthGuard} from "./shared/auth.guard";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
