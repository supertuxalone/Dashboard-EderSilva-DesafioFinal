import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioService } from './autenticacao/servicos/usuario.service';
import { usuarioInfo } from './shared/models/user-info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Desafio-Eder-angular';

  temToken : Observable<usuarioInfo> = this.usuarioService.retornarUsuario();

  constructor (private usuarioService : UsuarioService) {}
}
