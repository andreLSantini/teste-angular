import { Component, OnInit } from '@angular/core';
import * as data from './estados-cidades.json';
import * as dataprofissoes from './profissoes.json';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { ProfissaoService} from '../profissao.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@Component({
  selector: 'app-profissao-create',
  templateUrl: './profissao.component.html',
  styleUrls: ['./profissao.component.css']
})
export class ProfissaoComponent implements OnInit {
   location: Location;
  const sexos: Sexo[] = [
   {value: 'Masculino', viewValue: 'masculino'},
   {value: 'Feminino', viewValue: 'feminino'}
 ];
  const estados = data.estados;
  const profissoes = dataprofissoes.profissoes;

  cidades : array<String>;
  formCadastro: FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private profissaoService:ProfissaoService,
    private activatedRoute: ActivatedRoute,
    private router:Router,
    location: Location
  ) {
    this.cidades = [];
    this.createForm();
    this.location = location;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
    this.id = params.id;
   });
     if (this.id) {
       this.profissaoService.getById(this.id).subscribe(response=>{
         this.formCadastro.setValue(response);
       });
     }
  }

  doSomething (event) {
    this.cidades = event.value.cidades;
  }

  createForm() {
    this.formCadastro = this.formBuilder.group({
      id: null,
      nome: ['', Validators.required ],
      sobrenome: ['', Validators.required ],
      email: ['', Validators.email ],
      areaformacao: ['', Validators.required ],
      estado: '',
      cidade: '',
      profissao: '',
      data: ''
    });
  }

  save() {

    if (this.formCadastro.valid) {
      if(this.id) {
        this.profissaoService.edit(this.formCadastro.value).subscribe(
          response => {
            this.location.back();
          });
      } else {
        this.profissaoService.save(this.formCadastro.value).subscribe(
          suc=>{
            this.formCadastro.reset();
            this.location.back();
          }
        );
      }
    }
  }

}

export class Sexo {
  value: string;
  viewValue: string;
}
