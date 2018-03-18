import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';


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

  id:string;
  nuevo:boolean = false;

  constructor( public _heroes:HeroesService, private router:Router, private activatedRoute:ActivatedRoute ) {
    this.activatedRoute.params
                        .subscribe( parametros=>{
                          this.id = parametros['id'];
                          if( this.id != 'nuevo' ){
                            this._heroes.obtenerHeroe( this.id )
                                        .subscribe( (heroe:any) => this.heroe = heroe );
                          }
                        });
   }

  guardar(){

    if( this.id === 'nuevo' ){
      // insertando
      this._heroes.nuevoHeroe( this.heroe )
                .subscribe( data => {
                  let name = data['name'];
                  this.router.navigate(['/heroe', name])
                },
                  error=>console.error(error)
                );
    } else {
      // actualizando
      this._heroes.actualizarHeroe( this.heroe, this.id )
                .subscribe( data => {
                  console.log( data )
                },
                  error=>console.error(error)
                );
    }// fin if/else
    
  }// fin guardar

  agregarNuevo( forma:NgForm ){
    this.router.navigate(['/heroe','nuevo']);
    forma.reset({
      casa: 'Marvel'
    });
  }

}
