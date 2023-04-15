import { Component, OnInit } from '@angular/core';
import { Article } from './../Model/Article';

@Component({
  selector: 'app-articles-component',
  templateUrl: './articles-component.component.html',
  styleUrls: ['./articles-component.component.css']
})
export class ArticlesComponentComponent implements OnInit {

  constructor() { }
titre="Les articles du jour"
  ngOnInit(): void {
  }
  listeArticles:Article[]=[
    {
      titre: "Le championnat du monde",
      contenu: "Le champion du monde de cette annee est ",
      auteur: "Med taher",
      date: "12/12/2005",
      categorie: "Sport"
    },
    {
      titre: "Les nouveaux parents",
      contenu: "Les nouveaux parents",
      auteur: "Ahmed Said",
      date: "11/11/2018",
      categorie: "Education"
    },
    {
      titre: "Comment ecrire votre CV",
      contenu: "Pour ressir a decraucher un emploi ...",
      auteur: "Marie Elsa",
      date: "02/04/2017",
      categorie: "Travail"
    }
  ]
}
