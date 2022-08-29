import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/autenticacao/servicos/usuario.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent {
  user$ = this.usuarioService.retornarUsuario();

  //vamos injetar o nosso serviço de usuário
  constructor(private usuarioService: UsuarioService, private router : Router) { }

  //interessante ele voltar para tela de login
  logout() {
  this.usuarioService.logout();
  this.router.navigate(['']);
  }

}

