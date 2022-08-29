import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

// Ela basicamente vai retornar o *local storage*
  retornaToken() {
    return localStorage.getItem(KEY) ?? '';
  }

  // e vai utilizar ‘localStorage.
  salvaToken(token:string) {
    localStorage.setItem(KEY, token);
  }

  //no logout vai excluir o token do ‘localStorage’.
  excluiToken(){
    localStorage.removeItem(KEY);
  }

  //retornar o token, eu só quero retornar se tem ou não
  possuiToken(){
    return !! this.retornaToken();
  }

}
