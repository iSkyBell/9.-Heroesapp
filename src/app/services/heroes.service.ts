import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heroe } from '../interfaces/heroe.interface';
import 'rxjs/Rx';


@Injectable()
export class HeroesService {

  heroesURL:string = 'https://heroesapp-1a876.firebaseio.com/heroes.json';
  heroeURL:string  = 'https://heroesapp-1a876.firebaseio.com/heroes/';

  constructor( public httpClient: HttpClient ) { }

  nuevoHeroe( heroe:Heroe ){
    let body:string          = JSON.stringify(heroe);
    let headers:HttpHeaders  = new HttpHeaders({
      'Content-Type':'application/json'
    });

    return this.httpClient.post( this.heroesURL, body, {headers: headers} )
                          .map(resp=>resp);
  }// fin guardarHeroe

  actualizarHeroe( heroe:Heroe, key$:string ){
    
    let body:string          = JSON.stringify(heroe);
    
    let headers:HttpHeaders  = new HttpHeaders({
      'Content-Type':'application/json'
    });
    
    let url = `${ this.heroeURL }/${ key$ }.json`;

    return this.httpClient.put( url, body, {headers: headers} )
                          .map(resp=>resp);
  }// fin actualizarHeroe

  obtenerHeroe( key$:string ){
    let url = `${ this.heroeURL }/${ key$ }.json`;
    return this.httpClient.get( url )
                          .map(resp=>resp);
  }// fin obtenerHeroe

}
