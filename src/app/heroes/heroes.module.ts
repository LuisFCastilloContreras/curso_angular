import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations:[
    HeroComponent,
    ListComponent
  ],
  exports:[
    HeroComponent,
    ListComponent],
  imports:[CommonModule]//si alguno de los templetes de los componentes utiliza ng if ng for etc
})
export class HeroesModule{

}
