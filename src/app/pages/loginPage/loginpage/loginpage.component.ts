import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit{
  loginSubmitform=this.form.group({
    name:'',
    password:''
  })
  constructor(private form:FormBuilder){

  }
  ngOnInit(): void {
  }

}
