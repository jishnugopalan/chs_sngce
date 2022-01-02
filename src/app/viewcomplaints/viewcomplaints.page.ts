import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-viewcomplaints',
  templateUrl: './viewcomplaints.page.html',
  styleUrls: ['./viewcomplaints.page.scss'],
})
export class ViewcomplaintsPage implements OnInit {

  constructor(private authService:AuthService) { }
  complaints=[]
  ngOnInit() {
    console.log("inn")
    this.authService.viewcomplaintbyid({"userid":this.authService.user.id}).subscribe((res:any)=>{
      console.log(res)
      this.complaints=res
    })
  }

}
