import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name:string='ironman';
  public age:number=45;


  //dentro de estas clases se puede crear los get y set
  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  //metodo
  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  //cambiar nombre
  cambiarNombre():void{
    this.name='Thor';
  }

  //cambiar edad
  cambiarEdad():void{
    this.age=30;
  }
  //resetear valores
  resetform():void{
    this.name='ironman';
    this.age=45;
  }
}
