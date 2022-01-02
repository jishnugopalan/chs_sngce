import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private authService: AuthService,
    private router: Router,) { }

    change(){
      this.router.navigateByUrl("/changepassword")
    }
    logout(){
      this.authService.logout()
    }

  ngOnInit() {
  }

}
