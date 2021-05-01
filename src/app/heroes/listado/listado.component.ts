import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  
  herees:string[]=["Spiderman","Ironman","Superman"]
  cleanheroe2:string="";
  constructor() {
    console.log("constructor");
   }

  ngOnInit(): void {
    console.log("ngOnInit");
  }

  cleanHeroe(){

    this.cleanheroe2= this.herees.shift()||"";
  }

}
