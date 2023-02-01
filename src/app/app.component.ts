import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'cardUser';
  user:any;
  num:number = Math.floor(Math.random());


  constructor( private usuarioService: UsuarioService){

  }

  ngOnInit(): void {
    this.recuperarPersona();
  }

  recuperarPersona(){
    this.usuarioService.obtenerUsuario()
      .subscribe(resultado => this.user = resultado);
  }

  actualizar() {
    this.recuperarPersona();
  }

  // randomUser(){
  //   return this.num = Math.floor(Math.random() * (20 - 1)) + 1;
  // }
}
