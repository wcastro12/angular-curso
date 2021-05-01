import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { heroeComponent } from './heroe/heroe.componet';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
declarations:
[
    heroeComponent,
    ListadoComponent
],
exports:
[
    heroeComponent,
    ListadoComponent
],
imports:
[
    CommonModule
],
providers:
[

]

})
export class HeroesModule{


}