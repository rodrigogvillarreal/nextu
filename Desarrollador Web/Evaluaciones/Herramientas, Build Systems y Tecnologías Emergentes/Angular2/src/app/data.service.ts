import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Response } from '@angular/http';

@Injectable()
export class DataService {

  private usuarios: string[] = [];

  constructor(private httpService: HttpService) { }

  getUsers(){
    this.httpService.getDatosUsuarios()
      .subscribe(
        (data: Response) => console.log(data)
      )
    return this.usuarios;
  }

  getUsersIterable(){
    this.httpService.getDatosUsuarios()
      .subscribe(
        (data: Response) => {
          let aux : any[] = [];
          for(let key in data){
            aux.push(data[key].email);
          }
          this.usuarios = aux;
        }
      )
    return this.usuarios;
  }  

}
