import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private urlOriginal = '';

  @Input() descricao = '';

  //começar com data, eu sei que é uma URL interna da minha aplicação,
  @Input() set url(url: string){
  if(url.startsWith('data')){
    this.urlOriginal = url;
  }else{
    this.urlOriginal = `${API}/imgs/${url}`;
  }
   }

   get url(): string{
    return this.urlOriginal;
   }

  constructor() { }

  ngOnInit(): void { }

}
