import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

interface Product {
  name: string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cart: Product[] = [];


  onDrop(event: CdkDragDrop<Product[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const product = event.previousContainer.data[event.previousIndex];
      if(!this.cart.includes(product)){
      this.cart.push(product)
      }
    }
  }
}
