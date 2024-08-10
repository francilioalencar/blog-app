import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from '../model/apresentacao';

@Injectable({
  providedIn: 'root'
})
export class RequisitaHttpAppService {

  constructor(private http: HttpClient) {


    


   }


   requestGet():Observable<Pessoa[]>{

    return this.http.get<Pessoa[]>('https://my-json-server.typicode.com/francilioalencar/myJsonServer/posts');


  }
}
