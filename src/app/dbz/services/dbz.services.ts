import { Injectable } from '@angular/core';
import { Personaje } from '../Interfaces/Personajes';

@Injectable({
    providedIn: 'root'
})
export class DbzService {
    constructor(){
        console.log("DbzService");
    }

    newPersons:Personaje[] =[
        {name:"Krilin",power:100},
        {name:"Goku",power:200},
        {name:"vegueta",power:300},
    
      ]
}