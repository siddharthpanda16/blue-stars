import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  messageForm: FormGroup;
  submitted =false;
  success= true;

  constructor(private formBuilder: FormBuilder) { 
    this.messageForm =this.formBuilder.group({
      name:['',Validators.required],
      email:['',[Validators.email,Validators.required]],
      text:['',Validators.required]
      /*,
      nonStudent:['',Validators.required], */
    })
  }

  onSubmit(){
    this.submitted =true;
    if (this.messageForm.invalid){
      this.success= false;
      return ;
    }
    this.messageForm.reset();
    this.messageForm.clearValidators();

    this.success =true;
    console.log("i am here"); 
  }

  ngOnInit() {
  }
}
