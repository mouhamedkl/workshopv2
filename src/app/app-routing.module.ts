import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffresEmploiComponentComponent } from './offres-emploi-component/offres-emploi-component.component';
import { ArticlesComponentComponent } from './articles-component/articles-component.component';

const routes: Routes = [
  {path:"",redirectTo:"/offre",pathMatch:"full"},
  {path:"offre",component:OffresEmploiComponentComponent},
  {path:"article",component:ArticlesComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
