import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UsuarioService } from './usuario.service';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpClient: HttpClient, private usuarioService : UsuarioService) { }

  //metodo que fazer uma requisição do tipo post no back-end
  autenticar(usuario:string, senha:string): Observable<any>{
    return this.httpClient.post(`${API}/user/login`, {
    //O back-end está esperando o objeto que contém os atributos userName e password
      userName: usuario,
      password: senha,
    },
    {
      observe: 'response'
    }
     // Toda vez que ele fizer uma requisição,
     //além de pegar as informações, eu quero salvar o token no meu serviço
      ).pipe(
        tap((res) => {
        //pegaremos o token que está no header
        const authToken = res.headers.get('x-access-token') ?? '';
        this.usuarioService.salvaToken(authToken);
     })
    );
  }

  // autenticar(usuario:string, senha:string): Observable<any>{
  //   return this.httpClient.post(`${API}/usuario`, {
  //   //O back-end está esperando o objeto que contém os atributos userName e password
  //   nome: usuario,
  //   senha: senha,
  //   });
  // }

  //usando API do gatitobook
  // autenticar(usuario:string, senha:string): Observable<any>{
  //   return this.httpClient.post('http://localhost:3000/user/login', {
  //     //O back-end está esperando o objeto que contém os atributos userName e password
  //     userName: usuario,
  //     password: senha,
  //     });
  //
}
