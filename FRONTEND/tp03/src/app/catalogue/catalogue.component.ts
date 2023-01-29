import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../catalogue.service';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

interface Product {
  name: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html'
})
export class CatalogueComponent implements OnInit {
  searchTerm = '';
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchControl = new FormControl('');

  constructor(private service: CatalogueService) { }

  ngOnInit() {
    //TP3-02
    // this.service.getCatalogue().subscribe(data => {
    //   this.products = data;
    //   this.filteredProducts = this.products;
    // });

    //TP3-03
    this.service.getBouchon().subscribe(data => {
      console.log(data);
      this.products = data;
      this.filteredProducts = this.products;
    });

    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe(value => {
        if(value) {
          this.filteredProducts = this.products.filter(product =>
            product.name.toLowerCase().includes(value.toLowerCase())
          );
        }
      });
  }
}