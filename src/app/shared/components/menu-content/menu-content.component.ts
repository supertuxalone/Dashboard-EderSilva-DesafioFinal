import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UsuarioService } from 'src/app/autenticacao/servicos/usuario.service';

@Component({
  selector: 'app-menu-content',
  templateUrl: './menu-content.component.html',
  styleUrls: ['./menu-content.component.scss']
})
export class MenuContentComponent implements OnInit {

  logoImage : string = "../../../../assets/images/ford.png";

  @Output() showMenuContentEmitter = new EventEmitter<boolean>();

  // hasPermission: boolean = this.userService.getPermissions().includes("ADMIN");

  constructor(private userService: UsuarioService) { }

  ngOnInit(): void {
  }

  closeContent(event: MouseEvent, content: HTMLDivElement) {
    if(event.target !== content){
      this.showMenuContentEmitter.emit(false);
    }
  }

}
