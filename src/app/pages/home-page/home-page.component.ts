import { Component, OnInit } from '@angular/core';
import { Pets, pets } from '../../pets'
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  pets: Pets | undefined;
  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('petsId'))
    this.pets = pets.find(pets => pets.id === productIdFromRoute);

  }
  title = 'ng-carousel';
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplay: true, // Enable autoplay
    autoplayTimeout: 50, 
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 2
      }
    },
    nav: true
  }
  
  slides = [
    { id: 1, img: "../../assets/pet1.jpg" },
    { id: 2, img: "../../assets/pet2.jpg" },
    { id: 3, img: "../../assets/pet3.jpg" }
  ];



}
