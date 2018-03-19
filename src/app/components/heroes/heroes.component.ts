import { Component } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent {

  heroes:any[] = [];
  loading:boolean = true;

  constructor( public _heroes:HeroesService, private router:Router) {
    this._heroes.obtenerHeroes()
                .subscribe( ( heroes:any[] ) =>{
                  this.heroes = heroes;
                  this.loading = false;
                });
   }

   borrarHeroe( key$:string ){
     this._heroes.borrarHeroe(key$)
                 .subscribe( respuesta=>{
                   if( respuesta ){
                     console.error(respuesta);
                   } else {
                    // todo salio bien
                    delete this.heroes[key$];
                   }
                 });
   }


}
