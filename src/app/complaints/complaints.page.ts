import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.page.html',
  styleUrls: ['./complaints.page.scss'],
})
export class ComplaintsPage implements OnInit {

  onSubmit(){
    console.log("inn")
    this.form.value.workerid=this.authService.workerid
    this.form.value.userid=this.authService.user.id
    console.log(this.form.value)
    this.authService.addcomplaint(this.form.value).subscribe((res:any)=>{
      console.log(res)
      this.router.navigateByUrl("viewcomplaints")
    })
  }
  constructor(private authService:AuthService,private router:Router,public toastController: ToastController,public formbuilder:FormBuilder) { }
  form=this.formbuilder.group({
    complaint:['',[Validators.required]]
  })

  ngOnInit() {

  }

}
