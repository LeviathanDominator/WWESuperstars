import { APP_ROUTING } from './app.routes';

import { SuperstarsService } from './services/superstars.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/shared/home/home.component';
import { SuperstarsComponent } from './components/shared/superstars/superstars.component';
import { SuperstarComponent } from './components/shared/superstar/superstar.component';
import { LoginComponent } from './components/shared/login/login.component';
import { SignupComponent } from './components/shared/signup/signup.component';
import { ChampionsComponent } from './components/shared/champions/champions.component';
import { SearchComponent } from './components/shared/search/search.component';
import { SuperstarCardComponent } from './components/superstar-card/superstar-card.component';
import { ChampionshipComponent } from './components/shared/championship/championship.component';
import { ChampionshipsComponent } from './components/shared/championships/championships.component';
import { ChampionshipCardComponent } from './components/championship-card/championship-card.component';
import { ShowsComponent } from './components/shared/shows/shows.component';
import { ShowComponent } from './components/shared/show/show.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SuperstarsComponent,
    SuperstarComponent,
    LoginComponent,
    SignupComponent,
    ChampionsComponent,
    SearchComponent,
    SuperstarCardComponent,
    ChampionshipComponent,
    ChampionshipsComponent,
    ChampionshipCardComponent,
    ShowsComponent,
    ShowComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    SuperstarsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
