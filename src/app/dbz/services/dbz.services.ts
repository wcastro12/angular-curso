import { Injectable } from '@angular/core';
import { Personaje } from '../Interfaces/Personajes';

@Injectable({
    providedIn: 'root'
})
export class DbzService {
    constructor(){
        console.log("DbzService");
    }

    private _newPersons:Personaje[] =[
        {name:"Krilin",power:100},
        {name:"Goku",power:200},
        {name:"vegueta",power:300},
      ];

      get newPersons():Personaje[]
      {

        //con [...] se rompa la referencia y nunca deja modifiacar la valor de la colleccion
          return [...this._newPersons]
      }

      addCharacters(character:Personaje)
      {
        this._newPersons.push(character);
      }
}