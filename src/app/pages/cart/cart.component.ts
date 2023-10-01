import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartserviceService } from 'src/app/cartservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  constructor(private route: ActivatedRoute, private cart:CartserviceService){

  }
  check=true;

  items=this.cart.getItems();

    ngOnInit(): void {
      console.log(this.items)

  }
  checkicon(){
    
  }

}
