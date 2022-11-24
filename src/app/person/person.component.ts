import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  name = "";
  hayTexto = false
  constructor() { }

showText(){
  console.log(this.name)
  this.hayTexto =  this.name.length >= 1;
}

  ngOnInit(): void {
  }


}
