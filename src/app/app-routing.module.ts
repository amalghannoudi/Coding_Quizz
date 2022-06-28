import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { DomaineComponent } from './domaine/domaine.component';
const routes: Routes = [
  {path : "" , component : HomeComponent},
  {path :"home", component : HomeComponent },
  {path :"question",component:QuestionComponent},
  {path:"domaine", component:DomaineComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
