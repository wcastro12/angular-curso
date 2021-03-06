import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../Interfaces/Personajes';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-add-characters',
  templateUrl: './add-characters.component.html',
  styleUrls: ['./add-characters.component.css']
})
export class AddCharactersComponent implements OnInit {

@Input() newPerson:Personaje={name:'',power:0}
@Output() onNewCharacter:EventEmitter<Personaje> = new EventEmitter<Personaje>();
  constructor(private dbzservice:DbzService) { }

  ngOnInit(): void {
  }


  Agregar(){
    if(this.newPerson.name.trim().length !==0){
      //this.onNewCharacter.emit(this.newPerson)
      this.dbzservice.addCharacters(this.newPerson);
    }
    this.newPerson={name:'',power:0};

  }
}
