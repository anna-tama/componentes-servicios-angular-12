import { Component } from '@angular/core';
import {Product } from './models/product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // imgParent = 'https://www.w3schools.com/howto/img_avatar.png';
  imgParent= '';
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

  onLoaded(img: string){
    console.log('log padre',img);
  }
}
