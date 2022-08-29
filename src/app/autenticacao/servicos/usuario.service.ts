import jwt_decode from 'jwt-decode';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { usuarioInfo } from 'src/app/shared/models/user-info';
import { TokenService } from './token.service';

const API = environment.apiURL;
const NO_USER: usuarioInfo = {} as usuarioInfo;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  // envia o último dado que estava nele, ou seja, ele é um observable que guarda estado
  private usuarioSubject = new BehaviorSubject<usuarioInfo>({});
  //userSubject: BehaviorSubject<usuarioInfo> = new BehaviorSubject<usuarioInfo>(NO_USER);

  constructor(private tokenService : TokenService) {
    //Eu vou notificar todo mundo, vou notificar meus componentes.
    if (this.tokenService.possuiToken()) {
        this.decodificaJWT();
      }
    }

  //enviar ele como um observable porque para o meu componente ele perde a habilidade de enviar informações
  retornarUsuario(): Observable<usuarioInfo> {
    return this.usuarioSubject.asObservable();
  }
  salvaToken(token : string){
    this.tokenService.salvaToken(token);
    this.decodificaJWT();
  }

    //logout, eu tenho que limpar o token e, de novo, notificar todo mundo
  logout(){
    this.tokenService.excluiToken();
    this.usuarioSubject.next({});
  }

     //método para saber se está logada ou não
  estaLogado(){
    return this.tokenService.possuiToken();
  }

  //responsável por pegar informação do meu token através do tokenService e
	//decodificar essa informação para transformar no nosso objeto de usuário
	private decodificaJWT(){
	  const token = this.tokenService.retornaToken();
		const usuario = jwt_decode(token) as usuarioInfo;
		this.usuarioSubject.next(usuario);
	}

  // getPermissions(): string[] {
  //   const user = this.decodeJwt();
  //   //return user.roles;
  // }

  private decodeJwt(): usuarioInfo {
    const token = this.tokenService.retornaToken();
    const user = jwt_decode(token) as usuarioInfo;
    return user;
  }
}
