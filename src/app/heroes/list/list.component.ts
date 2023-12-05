import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroName:string[]=['spiderman','thor','ironman','hulk'];
  public heroeBorrado?:string;

  borrarUltimoHeroe():void{
    this.heroeBorrado=this.heroName.pop();
  }
}
