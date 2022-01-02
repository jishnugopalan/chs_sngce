import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-myearnings',
  templateUrl: './myearnings.page.html',
  styleUrls: ['./myearnings.page.scss'],
})
export class MyearningsPage implements OnInit {
earn=[]
  constructor(private authService:AuthService,private router:Router,public toastController: ToastController) { }

  ngOnInit() {

    this.authService.myearnings({"workerid":this.authService.user.id}).subscribe((res:any)=>{
      console.log(res)
      this.earn=res
    })
  }

}
