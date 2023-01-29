import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  constructor(private http: HttpClient) { }

  postClient(clientData: any) {
    return this.http.post('/api/clients', clientData);
  }

  getClient(clientId: any) {
    return this.http.get(`/api/clients/${clientId}`);
  }

  postLogin(loginData: any) {
    return this.http.post('/api/login', loginData);
  }

  // TP03-1
  // getCatalogue() {
  //   return this.http.get('/api/catalogue');
  // }

  // TP03-2
  getCatalogue() {
    const catalogue = `[
      {
        "id": 1,
        "name": "Produit 1",
        "description": "Description du produit 1",
        "price": 100
      },
      {
        "id": 2,
        "name": "Produit 2",
        "description": "Description du produit 2",
        "price": 200
      }
    ]`;

    return of(JSON.parse(catalogue));
  }
}