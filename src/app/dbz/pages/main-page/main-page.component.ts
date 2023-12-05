import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  //para inyectar el servicio, se hace en el constructor.
  // constructor(public dbzService:DbzService){

  // }
  //como buena practica el servicio debe ser privado
  constructor(private dbzService:DbzService){
  }

  //para regresar un nuevo objeto que no este referenciado al objeto original
  get characters():Character[]{
    console.log(this.dbzService.characters);
    return [...this.dbzService.characters];
  }
  //para llamar a los metodos
  onDeleteCharacter(id:string):void{
    this.dbzService.escuchandoEmisionBorrarCharacterById(id);
  }
  onNewCharacter(character:Character):void{
    this.dbzService.escuchandoEmisionNuevoCharacter(character);
  }

  /* se copio al servicio... propio para uso del servicio.
  public characters:Character[]=
  [{name:'Krillin',power:1000},
  {name:'Goku',power:9500},
  {name:'Vegueta',power:8500}];


  //PASO 4 CREAR LA FUNCION QUE VA A CACHAR LO QUE SE ESTA EMITIENDO
  //DONDE EL OUTPUT QUE SE COLOQUE COINCIDA CON EL QUE SE CREO EN EL PASO
  //1
  //aqui crearemos nnuestro metodo que seteara los valores que se emiten,
  //o mejor dicho el metodo que estara escuchando lo que se emita

  public escuchandoEmisionNuevoCharacter(personaje:Character):void{
    console.log("Impresion desde: Main page");
    console.log(personaje);
    debugger;
    this.characters.push(personaje);

  }

  public escuchandoEmisionBorrarCharacter(index:number):void{
    console.log("indice recibido en main page:",index);
    this.characters.splice(index,1);
  }*/

}
