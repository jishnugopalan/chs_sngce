import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-workerslist',
  templateUrl: './workerslist.page.html',
  styleUrls: ['./workerslist.page.scss'],
})
export class WorkerslistPage implements OnInit {
  workerslist=[];
  workersdetails=[];
  w
  servicecharge=500
  jtype=""
  rating=""
  isFilter=false
  constructor(private authService:AuthService,private router:Router,public toastController: ToastController) { }
  filter(){
    this.authService.filterworkers({"servicecharge":this.servicecharge,"category":this.authService.category,"jobtype":this.jtype}).subscribe((res:any)=>{
      console.log(res)
      this.workerslist=res
      
    })
  }
  public bookworker(id){
    console.log(id)
    this.authService.workerid=id;
    this.authService.viewmyworkersdetails({"_id":id}).subscribe(res => {
      console.log(res)
      this.authService.myworkers=res;
      this.router.navigateByUrl("/bookworker");
  
    })
  
  }

  filterwithrate(){
    console.log(this.rating)

  }

  async ngOnInit() {
    var n=this.authService.myworkers

  if(n.length!=0)
  {
    this.workerslist=this.authService.myworkers;
    this.w=this.workerslist[0].available_status
    console.log(this.w)
  console.log(this.workerslist)

  }
  else{
    const toast = await this.toastController.create({
      message: 'No workers found...',
      duration: 2000
    });
    toast.present();
  }
  
  }

}
