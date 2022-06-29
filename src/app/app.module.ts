import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { QuestionComponent } from './question/question.component';
import { HttpClientModule } from '@angular/common/http';
import { DomaineComponent } from './domaine/domaine.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    QuestionComponent,
    DomaineComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }