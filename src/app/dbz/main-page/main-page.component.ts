import { Component, OnInit } from '@angular/core';
import { Personaje } from '../Interfaces/Personajes';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private servicesdbz:DbzService) { 
  
  }

  ngOnInit(): void {
  }

  newPerson:Personaje = {
    name:"",
    power:0

  }

  get newPersons():Personaje[]
  {
    return this.servicesdbz.newPersons;
  }


  NewCharacter(character:Personaje){
    this.newPersons.push(character);
  }


  Cambiarnombre(event:any){
    //console.log(event.targe.);

  }
}


