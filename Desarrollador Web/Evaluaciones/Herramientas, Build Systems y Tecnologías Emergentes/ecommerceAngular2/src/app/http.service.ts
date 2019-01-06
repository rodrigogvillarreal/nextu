import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http : HttpClient) { }

  getDatosUsuarios(){
    return this.http.get('https://ecommerce-nextu.firebaseio.com/usuarios.json')
      .subscribe((data: Response) => console.log(data));

  }

}