import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProfissaoService {

  constructor(private http: HttpClient) { }

  save(data) {
     return this.http.post("/profissao", data);
  }
  find() {
    return this.http.get<Array<any>>('/profissao');
  }

  getById(id) {
    return this.http.get<any>('/profissao'+'/'+id);
  }

  edit(data) {
    return this.http.put('/profissao'+'/'+data.id, data);
  }

  delete(id:number) {
    return this.http.delete('/profissao'+'/'+id);
  }
}
