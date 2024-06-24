import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ImageComponent } from './image/image.component';
import { RecrutementComponent } from './recrutement/recrutement.component';
import { CartevisiteComponent } from './cartevisite/cartevisite.component';
import { ListeComponent } from './liste/liste.component';
import { DetailComponent } from './detail/detail.component';
import { ApiComponent } from './api/api.component';
import {QuizComponent} from "./quizz/quiz.component";


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ImageComponent,
    RecrutementComponent,
    CartevisiteComponent,
    DetailComponent,
    ListeComponent,
    ApiComponent,
    QuizComponent

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'CarteVisite', component: CartevisiteComponent,pathMatch: 'full' },
      { path: 'Image', component: ImageComponent },
      { path: 'Recrutement', component: RecrutementComponent },
      { path: 'Api', component: ApiComponent },
      { path: 'Quiz', component: QuizComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
