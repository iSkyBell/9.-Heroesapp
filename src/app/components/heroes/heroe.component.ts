import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent {

  heroe:Heroe = {
    nombre: '',
    bio: '',
    casa: 'Marvel'
  };

  constructor( public _heroes:HeroesService, private router:Router ) { }

  guardar(){
    this._heroes.nuevoHeroe( this.heroe )
                .subscribe( data => {
                  let name = data['name'];
                  this.router.navigate(['/heroe', name])
                },
                  error=>console.error(error)
                );
  }

}
