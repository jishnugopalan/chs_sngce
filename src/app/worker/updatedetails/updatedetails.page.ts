import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
var work:any
@Component({
  selector: 'app-updatedetails',
  templateUrl: './updatedetails.page.html',
  styleUrls: ['./updatedetails.page.scss'],
})
export class UpdatedetailsPage implements OnInit {
  s=''
  e=''
  sal=''
  des=''
  w=[]
  constructor(private authService:AuthService,public router: Router,public toastController: ToastController,public alertController: AlertController) { }
  async changestarttime(){

    console.log(this.s)
    if(this.s!=''){
      this.authService.updatestarttime({"userid":this.authService.uid,"job_start_time":this.s}).subscribe(async res=>{
        console.log(res)
        const toast = await this.toastController.create({
          message: 'Updated successfully',
          duration: 2000
        });
        toast.present();
      })
  
    }
    else{
      const toast = await this.toastController.create({
        message: 'Please input the correct format',
        duration: 2000
      });
      toast.present();
    }
   
  
  }
    async changeendtime(){
    console.log(this.e)
    if(this.e!=''){
      this.authService.updateendtime({"userid":this.authService.uid,"job_end_time":this.e}).subscribe(async res=>{
        console.log(res)
        const toast = await this.toastController.create({
          message: 'Updated successfully',
          duration: 2000
        });
        toast.present();
      })
  
    }
    else{
      const toast = await this.toastController.create({
        message: 'Please input the correct format',
        duration: 2000
      });
      toast.present();
    }
    
  
  }
    async changesalary(){
    console.log(this.sal)
    if(this.sal!=''){
      this.authService.updatesalary({"userid":this.authService.uid,"job_salary":this.sal}).subscribe(async res=>{
        const toast = await this.toastController.create({
          message: 'Updated successfully',
          duration: 2000
        });
        toast.present();
    
      })
  
    }
    
    else{
      const toast = await this.toastController.create({
        message: 'Please input the correct format',
        duration: 2000
      });
      toast.present();
    }
  
  }
    async changedescription(){
      console.log(this.des)
      if(this.des!=''){
        this.authService.updatedescription({"userid":this.authService.uid,"job_description":this.des}).subscribe(async res=>{
          console.log(res)
          const toast = await this.toastController.create({
            message: 'Updated successfully',
            duration: 2000
          });
          toast.present();
        })
  
  
      }
      else{
        const toast = await this.toastController.create({
          message: 'Please input the correct format',
          duration: 2000
        });
        toast.present();
      }
      
      
  }
  ngOnInit() {
    this.authService.viewifworker({"userid":this.authService.user.id}).subscribe(res=>{
      console.log(res)
      work=[res]
      this.w=work
      console.log(this.w)
    })
  }

}
