import { Component } from '@angular/core';


  @Component({
      selector: 'app-contador',
      template: `
      <button (click)="suma(number)">+{{number}}</button>
      <span>{{number}}</span>
      <button  (click)="suma(number*-1)">-{{number}}</button>
      `
  })
  
export class contador{
    constructor() { }
  
    ngOnInit() { }
    number:number=10;

    suma(valor:number){
  
      this.number+=valor;
    }
}