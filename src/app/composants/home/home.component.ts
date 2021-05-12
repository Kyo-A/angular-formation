import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/classes/personne';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string = 'Formation Angular';
  // Creation d'un objet de type Personne
  personne: Personne = new Personne(100, 'Doe', 'John');

  nom: string = 'wick';
  couleur: string = 'blue';

  // Creation d'un tableau d’entiers tab
  tab: number[] = [2, 3, 5, 8, 12, 15, 18];

  // ES5 -> EcmaScript 5

  // Ajout d' une methode direBonjour()
  // direBonjour() {
  //   return 'bonjour Angular';
  // }

  // ES6 -> EcmaScript 6
  direBonjour = () => {
    return 'bonjour Angular';
  }

  constructor() { }

  ngOnInit(): void {
  }

  getColor() {
    return "white";
  }

  getBackgroundColor() {
    return "red";
  }

  estPair(elt: number): boolean {
    return elt % 2 === 0;
  }

  tasks = [
    {
      name: 'EATING',
      status: 'doing'
    },
    {
      name: 'DRINKING',
      status: 'done'
    },
    {
      name: 'SLEEPING',
      status: 'done'
    }
  ];
}
