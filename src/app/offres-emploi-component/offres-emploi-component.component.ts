import { Component, OnInit } from '@angular/core';
import { Emploi } from '../Model/Emploi';

@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent implements OnInit {

  constructor() { }
  listeEmploi: Emploi[] = [
    { reference: 'ref1', title: 'Title 1', entreprise: 'facebook', etat: true },
    { reference: 'ref2', title: 'Title 2', entreprise: 'Entreprise 2', etat: false },
    { reference: 'ref3', title: 'Title 3', entreprise: 'Entreprise 3', etat: true }
  ];
  ngOnInit(): void {
  }
postuler(job:Emploi){

}
nombreOffresNonCloturees = 0;

calculerBilan() {
  let count = 0;
  for (let emploi of this.listeEmploi) {
    if (emploi.etat) {
      count++;
    }
  }
  this.nombreOffresNonCloturees = count;
}
listeEmploiFiltree: Emploi[] = [];
entrepriseRecherchee = '';
  chercherEmploi() {
    this.listeEmploiFiltree = this.listeEmploi.filter((emploi) => {
      return emploi.entreprise.toLowerCase().includes(this.entrepriseRecherchee.toLowerCase());
      
      
    });
    console.log(this.listeEmploiFiltree);
  }
}
