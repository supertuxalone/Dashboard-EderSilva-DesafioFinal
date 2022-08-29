import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/autenticacao/servicos/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //atributos de classe
  usuario = '';
  senha = '';

  constructor(private authService: AutenticacaoService, private router : Router) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.autenticar(this.usuario, this.senha).subscribe(() => {
      this.router.navigate(['dashboard']);
      console.log('Atenticado com Sucesso');
    }, (error) => {
      alert('Usuário ou senha Inválidos');
      console.log(error);
    }
     );
  }
}
