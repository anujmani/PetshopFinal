import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupserviceService } from 'src/app/signupservice.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupform:any=FormGroup;
  st= this.service.getSt();
  constructor(private formbuilder: FormBuilder, private service:SignupserviceService){}
  ngOnInit(): void {
    this.signupform= this.formbuilder.group({
      name:[null,[Validators.required]],
      address:[null,[Validators.required]],
      password:[null,[Validators.required]]
    });
  }
  onSubmit(){
    this.service.setSt(true);
    console.log("This is done")
  }

}
