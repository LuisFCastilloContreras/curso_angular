import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  //PASO 1 CREAR ESTA VARIABLE
  //emision de información
  //crear un eventemiter del tipo del objeto que va a crear
  //para que esto funcione se debe decorar con @output onNewCharacter
  @Output()
  public onNewCharacter:EventEmitter<Character>=new EventEmitter();

  public character:Character={
    name:'',power:0
  };

  //PASO 2 CREAR LA FUNCION QUE LO VA A EMITIR this.onNewCharacter.emit(this.character);
  emitCharacter():void{
    console.log("Impresion desde: add character");
    console.log("Impresion desde: add character, character:",this.character);
    //debugger; //se puede utilizar para debuggear se comprueba en herramienta dev del navegador.
    //valida que tenga valor el nombre
    if(this.character.name.length===0) return;
    //si tiene valor el nombre se emite el objeto character
    //se puede hacer el sprech ... para enviar un nuevo objeto
    this.onNewCharacter.emit(this.character);

    this.character={name:'',power:0};

  }
}
