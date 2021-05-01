import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './personajes/personajes.component';
import { AddCharactersComponent } from './add-characters/add-characters.component';
import { DbzService } from './services/dbz.services';


@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AddCharactersComponent
  ],
  exports:
  [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers:[
    DbzService
  ]
})
export class DbzModule { }
