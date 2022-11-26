import { Component, OnInit } from '@angular/core';
import { PersonModel } from '../model/person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  name = "";
  hayTexto = false

  peopleList: PersonModel[] = [
    new PersonModel("Pedro", "Mora", 20),
    new PersonModel("Luis", "Perez", 24)
  ]

  showText() {
    console.log(this.name)
    this.hayTexto = this.name.length >= 1;
  }

  ngOnInit(): void {
  }
}
