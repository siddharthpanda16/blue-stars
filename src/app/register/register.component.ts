import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  messageForm: FormGroup;
  submitted =false;
  success= true;

  constructor(private formBuilder: FormBuilder) { 
    this.messageForm =this.formBuilder.group({
      name:['',Validators.required],
      email:['',[Validators.email,Validators.required]],
      password:['',Validators.required],
      confirmPassword:['',Validators.required],
      telephone:['',Validators.pattern('[0-9]+')]
      /*,
      nonStudent:['',Validators.required], */
    })
  }

  onSubmit(){
    console.log('entered on sbumit');
    this.submitted =true;
    if (this.messageForm.invalid){
      this.success= false;
      return ;
    }

    this.success =true;
  }

  ngOnInit() {
    $(document).ready(function(){
      let steps = $('.step-bar ul li');
      $('.finish-step').css("display","none");
      $('.user-details').css("display","none");
      // First step //
      $('.firstNext').on('click', (e) => {
         setTimeout(() => {
           $(steps[1]).find('.number').addClass('active');
         }, 1000);
        
         $(steps[1]).find('.line').addClass('line-active');
         $('.account-setup').css('left', '-4000px');
         $('.user-details').css('left', 'calc(50% - 150px)');
         $('.user-details').css("display","block");
      });
      
      // Second step
      $('.secondNext').on('click', (e) => {
        setTimeout(() => {
          $(steps[2]).find('.number').addClass('active');
        }, 1000);
        
        $(steps[2]).find('.line').addClass('line-active');
        $('.finish-step').css("display","block");
        $('.user-details').css('left', '-4000px');
        $('.finish-step').css('left', 'calc(50% - 150px)');
      });
      
      $('.firstPrev').on('click', (e) => {
        $(steps[1]).find('.number').removeClass('active');
        $(steps[1]).find('.line').removeClass('line-active');
        $('.user-details').css('left', '4000px');
        $('.account-setup').css('left', 'calc(50% - 150px)');
      });
      
      // Last step
      $('.secondPrev').on('click', (e) => {
        $(steps[2]).find('.number').removeClass('active');
        $(steps[2]).find('.line').removeClass('line-active');
        $('.finish-step').css('left', '4000px');
        $('.user-details').css('left', 'calc(50% - 150px)')
      });
      
    });
  }

  


}
