import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as identificador } from 'uuid'; //genera un identificador. en este caso se elige la versión 4
//este se lo vamos a colocar a cada uno de los personajes
//le dice a angular que lo debe tratar como un servicio y lo debe inyectar

//providedIn: 'root' define que sera un singleton en toda la aplicación
@Injectable({
  providedIn: 'root'
})

export class DbzService {


  public characters:Character[]=
  [{ id:identificador(), name:'Krillin',power:1000},
  {id:identificador(),name:'Goku',power:9500},
  {id:identificador(),name:'Vegueta',power:8500}];


  //PASO 4 CREAR LA FUNCION QUE VA A CACHAR LO QUE SE ESTA EMITIENDO
  //DONDE EL OUTPUT QUE SE COLOQUE COINCIDA CON EL QUE SE CREO EN EL PASO
  //1
  //aqui crearemos nnuestro metodo que seteara los valores que se emiten,
  //o mejor dicho el metodo que estara escuchando lo que se emita

  public escuchandoEmisionNuevoCharacter(personaje:Character):void{
    console.log("Impresion desde: Main page");
    console.log(personaje);
    //en el servicio podemos agregar el identificador.
    //primer forma
    //const nuevoPersonaje:Character={id:identificador(),name:personaje.name,power:personaje.power};
    //segunda forma, se le dice toma el identificar y las propiedades del objeto character, forma normal poner primero el expretion
    const nuevoPersonaje2:Character={id:identificador(), ...personaje};
    this.characters.push(nuevoPersonaje2);

  }

  // public escuchandoEmisionBorrarCharacter(index:number):void{
  //   console.log("indice recibido en main page:",index);
  //   this.characters.splice(index,1);
  // }
  public escuchandoEmisionBorrarCharacterById(id:string):void{
    console.log("indice recibido en main page:",id);
    //regresar un nuevo arreglo donde no venga incluido el valor que coincida con el id
    this.characters=this.characters.filter(character=>character.id != id);
  }
}
