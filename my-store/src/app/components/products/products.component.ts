import { Component, OnInit } from '@angular/core';
import {Product} from  '../../models/product.model'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products: Product[] = [
    {
      id: '1',
      name: 'Automobil de juguete',
      price: 100,
      image: './assets/images/toy.jpg'
  },
  {
      id: '2',
      name: 'Bicicleta casi nueva',
      price: 180,
      image: './assets/images/bike.jpg'
  },
  {
      id: '3',
      name: 'Colección de albumes',
      price: 120,
      image: './assets/images/album.jpg'
  }
  ]

}
