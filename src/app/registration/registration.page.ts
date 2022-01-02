import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor(private FormBuilder: FormBuilder,private authService:AuthService,private router:Router) { }
  get name(){
    return this.registrationForm.get('name');
  }
  get email(){
    return this.registrationForm.get('email');
  }
  get phone(){
    return this.registrationForm.get('phone');
  }
  public errorMessages = {
    name: [
      { type: 'required', message: 'Name is required' },
      { type: 'maxlength', messages: 'Name cannot be longer than 100 charetors' }
    ],
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Please enter a valid email address' }
    ],
    phone: [
      { type: 'required', message: 'Phone number is required' },
      { type: 'pattern', message: 'Please enter a valid phone number' },
      { type: 'maxlength', messages: 'Please enter a valid phone number' }
    ]
  };
  registrationForm = this.FormBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(100)]],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')
      ]
    ],
    phone: [
      '',
      [
        Validators.required,
        Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$'),
        Validators.maxLength(10),
        Validators.minLength(10)
        
      ]
    ]
  });

  
  public submit(){
    console.log(this.registrationForm.value);
    this.router.navigateByUrl("/password");
    this.authService.createotp(this.registrationForm.value).subscribe((res:any)=>{
      console.log(res)

      let data

    data=Object.assign(this.registrationForm.value)
    console.log(data)
    this.authService.userform=data
      this.router.navigateByUrl("/password");
       
    })
  }

  ngOnInit() {
  }

}
