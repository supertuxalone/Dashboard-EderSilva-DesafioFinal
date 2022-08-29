import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menuprincipal',
  templateUrl: './menuprincipal.component.html',
  styleUrls: ['./menuprincipal.component.css']
})
export class MenuprincipalComponent implements OnInit {
  mostraMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

  abreMenu(){
    this.mostraMenu = !this.mostraMenu;
  }
}
