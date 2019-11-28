import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/shared/home/home.component';
import { SuperstarsComponent } from './components/shared/superstars/superstars.component';
import { SuperstarComponent } from './components/shared/superstar/superstar.component';
import { ChampionsComponent } from './components/shared/champions/champions.component';
import { SearchComponent } from './components/shared/search/search.component';
import { SignupComponent } from './components/shared/signup/signup.component';
import { LoginComponent } from './components/shared/login/login.component';
import { ChampionshipsComponent } from './components/shared/championships/championships.component';
import { ChampionshipComponent } from './components/shared/championship/championship.component';
import { ShowsComponent } from './components/shared/shows/shows.component';
import { ShowComponent } from './components/shared/show/show.component';
import { AuthGuard } from './guards/auth.guard';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'superstars', component: SuperstarsComponent, canActivate: [ AuthGuard ] },
  { path: 'superstar/:id', component: SuperstarComponent, canActivate: [ AuthGuard ] },
  { path: 'champions', component: ChampionsComponent, canActivate: [ AuthGuard ] },
  { path: 'championships', component: ChampionshipsComponent, canActivate: [ AuthGuard ] },
  { path: 'championship/:id', component: ChampionshipComponent, canActivate: [ AuthGuard ] },
  { path: 'shows', component: ShowsComponent, canActivate: [ AuthGuard ] },
  { path: 'show/:id', component: ShowComponent, canActivate: [ AuthGuard ] },
  { path: 'search/:option/:word', component: SearchComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
