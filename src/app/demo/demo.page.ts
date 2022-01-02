import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AuthService } from '../services/auth.service';

var jobs:any
@Component({
  selector: 'app-demo',
  templateUrl: './demo.page.html',
  styleUrls: ['./demo.page.scss'],
})
export class DemoPage implements OnInit {
  first=false
  public status:boolean 
  joblist=[]

  constructor(private geolocation: Geolocation,private authService:AuthService,private router:Router) { }


  public change(){
    if(this.status==true)
    {
      this.authService.availablestatus({"userid":this.authService.user.id,"s":"Available"}).subscribe(res=>{
        console.log(res)
       
      })
    }
    if(this.status==false)
    {
      this.authService.availablestatus({"userid":this.authService.user.id,"s":"Not available"}).subscribe(res=>{
        console.log(res)
      })
    }
  }
  public viewWorkers(cat){
    console.log(cat)
    this.authService.viewmyworkers({"category":cat}).subscribe(res=>{
      console.log(res)
      this.authService.myworkers=res;
      console.log(this.authService.myworkers)
      this.router.navigateByUrl("/workerslist");
      
    });
    }

  ngOnInit() {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp.coords.latitude)
      console.log(resp.coords.longitude)
      console.log(this.authService.user.id)

      this.authService.addlocation({"userid":this.authService.user.id,"latitude":resp.coords.latitude,"longitude":resp.coords.longitude}).subscribe((res:any)=>{
        console.log(res)
      })
     }).catch((error) => {
       console.log('Error getting location', error);
     });


     this.authService.viewifworker({"userid":this.authService.user.id}).subscribe((res:any)=>{
      this.first=true
      console.log(res)
      var a=res
      var b=res.available_status
      console.log(b)
      if(b=='Not available'){
      this.status=false
      }
      if(b=='Available'){
        this.status=true
      }
    
    })
    this.authService.viewcategory('').subscribe(res=>{
      console.log(res)
      
       jobs= res;
    
       console.log(jobs)
       this.joblist=jobs;
    })
  }

}
