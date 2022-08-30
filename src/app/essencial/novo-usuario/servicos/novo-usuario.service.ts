import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NovoUsuario } from './novo-usuario';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {
  constructor(private http: HttpClient) { }

  // vai receber o novo usuário, novoUsuario. Nós temos o nosso
  //método que recebe o novoUsuario e retorna o observable com sucesso ou a falha desse post.
  cadastraNovoUsuario(novoUsuario : NovoUsuario){
    return this.http.post(`${API}/user/signup`, novoUsuario);
  }

  verificaUsuarioExistente(nomeUsuario : string){
    return this.http.get(`${API}/user/exists/${nomeUsuario}`);
    }

}
