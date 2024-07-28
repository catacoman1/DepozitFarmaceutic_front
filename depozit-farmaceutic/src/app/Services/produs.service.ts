import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdusService {

  private apiUrl = 'http://localhost:8080/api/produse';

  constructor(private http: HttpClient) { }

  getProduse(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}