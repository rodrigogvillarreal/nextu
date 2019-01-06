import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable()
export class DataService {

  private usuarios: string[] = [];

  constructor(private httpService: HttpService) { }

  getUsers(){
    return this.httpService.getDatosUsuarios();
  }

}
