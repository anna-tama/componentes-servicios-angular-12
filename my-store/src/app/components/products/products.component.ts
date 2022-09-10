import {
  Component,
  OnInit
} from '@angular/core';
import {
  Product
} from '../../models/product.model'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  myShoppingCart: Product[] = [];
  total: number = 0;

  products: Product[] = [{
      id: '1',
      name: 'Juguete',
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
    },
    {
      id: '4',
      name: 'Casa',
      price: 120,
      image: './assets/images/house.jpg'
    },
    {
      id: '5',
      name: 'Libros',
      price: 120,
      image: './assets/images/books.jpg'
    }
  ]

  onAddToShoppingCart(product: Product){
    this.myShoppingCart.push(product);
    this.total = this.myShoppingCart.reduce((sum,item) =>  sum +item.price,0   )
    // console.log(product); //imprimo el valor que me manda desde el componente hijo product
  }

}
