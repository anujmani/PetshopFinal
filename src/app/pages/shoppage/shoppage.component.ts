import { Component, OnInit } from '@angular/core';
import { Pets , pets} from '../../pets'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shoppage',
  templateUrl: './shoppage.component.html',
  styleUrls: ['./shoppage.component.css']
})
export class ShoppageComponent implements OnInit {
  pet = [...pets];
  
  constructor(private route: ActivatedRoute){}
  ngOnInit(): void {
    console.log(this.pet)
    throw new Error('Method not implemented.');

  }
  onAdd(pet: any){
    console.log(pet)

  }

}
