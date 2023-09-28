import { Injectable } from '@angular/core';
import { Pets } from './pets';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  items: Pets[] = [];
  constructor(private http:HttpClient) { }
  addToCart(pet: Pets){
    this.items.push(pet);
  }
  getItems(){
    return this.items;
  }
  clearCart(){
    this.items=[];
    return this.items;
  }
  
}
