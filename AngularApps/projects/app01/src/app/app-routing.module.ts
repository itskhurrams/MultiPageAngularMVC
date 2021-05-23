import { NgModule } from '@angular/core';
import { NavigationEnd, Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private route:Router){
  var topHref = window.top.location.href != window.location.href ?
                window.top.location.href.substring(0,
                                         window.top.location.href.indexOf('/AngularSpa') + 11) :
                null;
  this.route.events.subscribe(e => {
    if(e instanceof NavigationEnd){
      if (topHref){
        window.top.history.replaceState(window.top.history.state,
                                        window.top.document.title, topHref + e.url);
      }
    }
  });
}
}
