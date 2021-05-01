import { Component } from "@angular/core";

@Component({
selector:'app-heroe',
templateUrl:'heroe.componet.html',

})
export class heroeComponent{

name:string="Ironman";
yeas:number=45;

get nameUppercase(){
    return this.name.toUpperCase();
}

obtenerNombre():string{

    return `${this.name} - ${this.yeas}`;
}

changeName():void{

    this.name="Superman";
}
changeNumber():void{

    this.yeas++;
}
}