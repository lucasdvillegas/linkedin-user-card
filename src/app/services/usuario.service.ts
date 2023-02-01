import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor( private http: HttpClient ) { }

  obtenerUsuario(){
    return this.http.get('https://randomuser.me/api/');
  }
}
