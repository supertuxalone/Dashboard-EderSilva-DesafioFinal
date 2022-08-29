import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { minusculoValidator } from './minusculo.validator';
import { NovoUsuario } from './servicos/novo-usuario';
import { NovoUsuarioService } from './servicos/novo-usuario.service';
import { UsuarioExisteService } from './servicos/usuario-existe.service';
import { usuarioSenhaIguaisValidator } from './usuario-senha-iguais.validator';


@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
})
export class NovoUsuarioComponent implements OnInit {
  novoUsuarioForm!: FormGroup;

  constructor(private formBuilder : FormBuilder,
    private novoUsuarioService :  NovoUsuarioService,
    private usuarioExistenteService : UsuarioExisteService,
    private router : Router) { }

  ngOnInit(): void {
    this.initializeForm();
  }
  // criar um método que vai ser executado quando o formulário for submetido no evento de onSubmit
  cadastrar(){
     const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario
     this.novoUsuarioService.cadastraNovoUsuario(novoUsuario).subscribe(() => {
      this.router.navigate(['']);
    },
    (error) => {
      console.log(error);
    }
    );
  }

  //construindo o objeto novoUsuarioForm
  initializeForm(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      userName: ['', [minusculoValidator], [this.usuarioExistenteService.usuarioJaExiste()]],
      password: [''],
      },
      {
        Validators: [usuarioSenhaIguaisValidator],
      });
    }

}
