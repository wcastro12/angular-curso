import { summaryFileName } from '@angular/compiler/src/aot/util';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'construir app';
  number:number=10;

  suma(valor:number){

    this.number+=valor;
  }
}


