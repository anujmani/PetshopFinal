import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartserviceService } from 'src/app/cartservice.service';
import { Pets, pets } from 'src/app/pets';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  pet: Pets |any;
  constructor(private route:ActivatedRoute, private cart:CartserviceService){}
  ngOnInit(): void {
    const routeParams= this.route.snapshot.paramMap
    const petIdFromRoute = Number(routeParams.get('petId'));
    this.pet= pets.find(pet=>pet.id===petIdFromRoute); 
    console.log("log is the"+this.pet)
  }
  onAdd(pet: any){
    console.log(pet)
    this.cart.addToCart(pet);
    alert(pet.name +" is added to the cart")

  }

}
