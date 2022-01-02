import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-viewcomplaintbyadmin',
  templateUrl: './viewcomplaintbyadmin.page.html',
  styleUrls: ['./viewcomplaintbyadmin.page.scss'],
})
export class ViewcomplaintbyadminPage implements OnInit {
complaints=[]
profile=[]
  constructor(private authService:AuthService,public toastController:ToastController,public router:Router,public formbuilder:FormBuilder) { }
form=this.formbuilder.group({
  replay:['',[Validators.required]]
})
  sendreplay(complaintid){
    console.log(complaintid)
    this.form.value.complaintid=complaintid
    console.log(this.form.value)

    this.authService.sendreplay(this.form.value).subscribe(async (res:any)=>{
      console.log(res)
      const toast = await this.toastController.create({
        message: 'Replay added successfully',
        duration: 2000
      });
      toast.present();
      this.ngOnInit()
    })
  }
  viewworker(workerid){
console.log(workerid)
this.authService.id=workerid
    console.log(this.authService.id)
    this.router.navigateByUrl("viewworker");
 
  }
  ngOnInit() {
    this.authService.viewcomplaints({}).subscribe((res:any)=>{
      console.log(res)
      this.complaints=res
      for(let i=0;i<this.complaints.length;i++){

        this.authService.viewprofile({"_id":this.complaints[i].userid}).subscribe((res:any)=>{
          console.log(res)
          this.profile.push(res)
          console.log(this.profile)
        })

      }
      
    })
  }

}
