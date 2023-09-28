import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupform:any=FormGroup;
  st= true;
  constructor(private formbuilder: FormBuilder){}
  ngOnInit(): void {
    this.signupform= this.formbuilder.group({
      name:[null,[Validators.required]],
      address:[null,[Validators.required]],
      password:[null,[Validators.required]]
    });
  }
  onSubmit(){

    console.log("This is done")
  }

}
