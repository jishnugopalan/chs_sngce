import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sendbill',
  templateUrl: './sendbill.page.html',
  styleUrls: ['./sendbill.page.scss'],
})
export class SendbillPage implements OnInit {
user=[]
total=0
bill=[]
  constructor(private authService:AuthService,private router:Router,public toastController: ToastController,private formBuilder: FormBuilder) { }

form=this.formBuilder.group({
  toolname: ['', [Validators.required, Validators.maxLength(30),Validators.minLength(1)]],
  rate: [
    '',
    [
      Validators.required,
      Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$'),
      Validators.maxLength(4),
      Validators.minLength(1)
      
    ]
  ]

})
onSubmit(){
  this.form.value.userid=this.authService.userid
  this.form.value.bookingid=this.authService.bookingid
  this.form.value.workerid=this.authService.user.id
  console.log(this.form.value)
  this.authService.addbill(this.form.value).subscribe(async (res:any)=>{
    console.log(res)
    const toast = await this.toastController.create({
      message: 'Bill added successfully',
      duration: 2000
    });
    toast.present();
    this.ngOnInit()

  })

}
deleteBill(billid){
console.log(billid);
this.authService.deletebill({"billid":billid}).subscribe(async (res:any)=>{
  console.log(res)
  const toast = await this.toastController.create({
    message: 'One item deleted from bill',
    duration: 2000
  });
  toast.present();
  this.ngOnInit()

})
}
  ngOnInit() {
    this.authService.viewprofile({"_id":this.authService.userid}).subscribe((res:any)=>{
      console.log(res)
     this.user=[res]
    })
    this.total=0

    this.authService.viewbill({"bookingid":this.authService.bookingid}).subscribe((res:any)=>{
      console.log(res)
      this.bill=res

      for(let i=0;i<res.length;i++){
        this.total=this.total+res[i].rate
      }
    })
  }

}
