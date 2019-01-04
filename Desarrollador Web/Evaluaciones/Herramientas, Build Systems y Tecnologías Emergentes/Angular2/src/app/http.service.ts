import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http : Http) { }

  getDatosUsuarios(){
    return this.http.get('https://ecommerce-nextu.firebaseio.com/usuarios.json')
    .map((response: Response)=>response.json());
  }

}
