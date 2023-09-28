import { Component, OnInit } from '@angular/core';
import { Pets , pets} from '../../pets'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{
  pets: Pets | undefined;
  constructor(private route: ActivatedRoute){}
  
  
  
  
  
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('petsId'))
    this.pets = pets.find(pets => pets.id === productIdFromRoute);
    
  }
  

}
