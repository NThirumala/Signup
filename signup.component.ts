import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  employeeForm: FormGroup;
  data:any[] = [];
  emp : Employee[] = [
    {
      name :'',
      password:'',
      cpassword:'',
      phone: null

    }
  ];
  constructor(private fb : FormBuilder) { }

  ngOnInit() {

    this.employeeForm = this.fb.group({
      name:['', Validators.required],
      password:['', Validators.required],
      cpassword:['', Validators.required],
      phone:['', [Validators.required, Validators.maxLength(11)]]
    });
  }
  saveEmployee(): void{
    // console.log(this.employeeForm.value);
    this.emp = this.employeeForm.value;
    console.log("printing employee object emp");
    console.log(this.emp);
    console.log(this.employeeForm.get('name').value);
    this.data.push(this.employeeForm.get('name').value);
    this.data.push(this.employeeForm.get('password').value);
    // this.data.push(this.employeeForm.get('cpassword').value);
    this.data.push(this.employeeForm.get('phone').value);
    console.log(this.data);
  }
  clear(){
    console.log("Hi");
    this.employeeForm.reset();
  }

 }
