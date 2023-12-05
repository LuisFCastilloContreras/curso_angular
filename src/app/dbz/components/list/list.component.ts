import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public characterList:Character[]=
  [{name:'Trunks',power:500}];

  @Output()
  onDeleteCharacter:EventEmitter<string>=new EventEmitter();

  emitIndexDeleteCharacter(index?:string):void{
    //TODO Emitir el ID del personaje
    console.log({index});
    if(!index)
    return;
      this.onDeleteCharacter.emit(index);
  }
}
