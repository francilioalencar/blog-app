import { Component, OnInit } from '@angular/core';
import { RequisitaHttpAppService } from '../../service/requisita-http-app.service';
import { Pessoa } from '../../model/apresentacao';

@Component({
  selector: 'app-home-app',
  templateUrl: './home-app.component.html',
  styleUrl: './home-app.component.scss'
})
export class HomeAppComponent implements OnInit {

  constructor(private requisicao : RequisitaHttpAppService){}

  pessoa : Pessoa = {
    id: 0,
    name: '',
    interesse: '',
    foto: '',
    descricao: '',
    competencias: [],
  };

  ngOnInit(): void {

    this.requisicao.requestGet().subscribe(
      (response)=>{
         this.pessoa = response[0];

         console.log(this.pessoa.name)
        
      }
    )

    
  }

}
