import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/autenticacao/servicos/usuario.service';

@Component({
  selector: 'app-bem-vindo',
  templateUrl: './bem-vindo.component.html',
  styleUrls: ['./bem-vindo.component.css']
})
export class BemVindoComponent implements OnInit {

  homeImage : string = "/Desafio-ford-angular/Desafio-Eder-angular/src/assets/img/ranger.jpg";

  user$ = this.usuarioService.retornarUsuario();

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

}
