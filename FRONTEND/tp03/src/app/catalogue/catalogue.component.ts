import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../catalogue.service';

interface Product {
  name: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-catalogue',
  template: `
    <div *ngFor="let product of products">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-text">{{ product.description }}</p>
          <h6 class="card-subtitle mb-2 text-muted">{{ product.price }} €</h6>
          <button class="btn btn-primary" [disabled]="true">Acheter</button>
        </div>
      </div>
    </div>
  `,
})
export class CatalogueComponent implements OnInit {
  products: Product[] = [];

  constructor(private service: CatalogueService) { }

  ngOnInit() {
    this.service.getCatalogue().subscribe(data => {
      this.products = data;
    });
  }
}