import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../Interfaces/Personajes';




@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() newPersons:Personaje[] =[]
}
