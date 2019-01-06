import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable()
export class DataService {

  private usuarios: string[] = [];

  constructor(private httpService: HttpService) { }

  getUsers(){
    return this.httpService.getDatosUsuarios();
  }

  getUsersIterable(){
    return this.httpService.getDatosUsuarios()
    /*
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
    */
  }  

}
