import { Component, Input } from '@angular/core';
import {CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop'

interface Product{
  name:string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  products: Product[] =[
    {name: 'Product 1'},
    {name: 'Product 2'},
    {name: 'Product 3'}
  ];

  constructor() { }

  onDrop(event: CdkDragDrop<Product[]>){

    moveItemInArray(this.products,event.previousIndex,event.currentIndex);
  }
}
