import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffresEmploiComponentComponent } from './offres-emploi-component/offres-emploi-component.component';
import { ArticlesComponentComponent } from './articles-component/articles-component.component';
import { DrivenformComponent } from './drivenform/drivenform.component';

const routes: Routes = [
  {path:"",redirectTo:"/offre",pathMatch:"full"},
  {path:"offre",component:OffresEmploiComponentComponent},
  {path:"article",component:ArticlesComponentComponent},
  {path:"form",component:DrivenformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
