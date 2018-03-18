import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heroe } from '../interfaces/heroe.interface';
import 'rxjs/Rx';


@Injectable()
export class HeroesService {

  heroesURL:string = "https://heroesapp-1a876.firebaseio.com/heroes.json";

  constructor( public httpClient: HttpClient ) { }

  nuevoHeroe( heroe:Heroe ){
    let body:string          = JSON.stringify(heroe);
    let headers:HttpHeaders  = new HttpHeaders({
      'Content-Type':'application/json'
    });

    return this.httpClient.post( this.heroesURL, body, {headers: headers} )
                          .map(resp=>{
                            console.log( 'Service' );
                            console.log( resp );
                            return resp;
                          });
  }

  actualizarHeroe( heroe:Heroe ){
    let body:string          = JSON.stringify(heroe);
    let headers:HttpHeaders  = new HttpHeaders({
      'Content-Type':'application/json'
    });
    let url:string = '';
    return this.httpClient.put( this.heroesURL, body, {headers: headers} )
                          .map(resp=>{
                            console.log( 'Service' );
                            console.log( resp );
                            return resp;
                          });
  }

}
