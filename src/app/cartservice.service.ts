import { Injectable } from '@angular/core';
import { Pets } from './pets';


@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  items: Pets[] = [];
  constructor() { }
  addToCart(pet: Pets){
    this.items.push(pet);
    console.log(this.items)
  }
  getItems(){
    return this.items;
  }
  clearCart(){
    this.items=[];
    return this.items;
  }
  
}
