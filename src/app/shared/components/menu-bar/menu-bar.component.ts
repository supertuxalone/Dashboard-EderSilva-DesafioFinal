import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/autenticacao/servicos/usuario.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  canShowUserDetails !: boolean;
  user$ = this.userService.retornarUsuario();

  @Output() showMenuContentEmitter = new EventEmitter<boolean>();

  constructor(private userService: UsuarioService, private router : Router) {
    this.canShowUserDetails = false;
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['']);
  }

  showUserDetails(): void {
    this.canShowUserDetails = !this.canShowUserDetails;
  }

  showMenuContent(): void {
    this.showMenuContentEmitter.emit(true);
  }

}
