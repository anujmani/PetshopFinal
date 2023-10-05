import { Component, OnInit } from '@angular/core';
import { Pets , pets} from '../../pets'
import { ActivatedRoute } from '@angular/router';
import { CartserviceService } from 'src/app/cartservice.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-shoppage',
  templateUrl: './shoppage.component.html',
  styleUrls: ['./shoppage.component.css']
})
export class ShoppageComponent implements OnInit {
  pet = [...pets];

  
  constructor(private route: ActivatedRoute, private cart: CartserviceService){}
  ngOnInit(): void {
    console.log(this.pet)
 

  }
  onAdd(pet: any){
    console.log(pet)
    this.cart.addToCart(pet);
    alert(pet.name +" is added to the cart")

  }
  
  
}
