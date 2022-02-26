
import { Platform, AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
 
const TOKEN_KEY = 'access_token';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  url = environment.url;
  user = null;
  authenticationState = new BehaviorSubject(false);
  a:any
  phone:any
  uid:any
  userform:any
  profile_pic:any
  name:any
  id:any
  myworkers:any
  workerid:any
  wid:any
  jid:any
  bookingid:any
  chatid:any
  userid:any
  category:any
 
  constructor(private http: HttpClient, private helper: JwtHelperService, private storage: Storage,
    private plt: Platform, private alertController: AlertController) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }
 
  checkToken() {
    this.storage.get(TOKEN_KEY).then(token => {
      if (token) {
        let decoded = this.helper.decodeToken(token);
        let isExpired = this.helper.isTokenExpired(token);
 
        if (!isExpired) {
          this.user = decoded;
          console.log(this.user)
          this.authenticationState.next(true);
        } else {
          this.storage.remove(TOKEN_KEY);
        }
      }
    });
  }
  
  viewbillimage(credentials: any) {
    return this.http.post(`${this.url}/api/viewbillimage`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  addbillimage(credentials: any) {
    return this.http.post(`${this.url}/api/addbillimage`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  cancelbooking(credentials: any) {
    return this.http.post(`${this.url}/api/cancelbooking`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  filterworkerswithrate(credentials: any) {
    return this.http.post(`${this.url}/api/filterworkerswithrate`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  filterworkers(credentials: any) {
    return this.http.post(`${this.url}/api/filterworkers`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewworkdetails(credentials: any) {
    return this.http.post(`${this.url}/api/viewworkdetails`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  updatepass(credentials: any) {
    return this.http.post(`${this.url}/api/updatepass`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  findphone(credentials: any) {
    return this.http.post(`${this.url}/api/findphone`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }

  findemail(credentials: any) {
    return this.http.post(`${this.url}/api/findemail`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  updatedescription(credentials: any) {
    return this.http.post(`${this.url}/api/updatedescription`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  updatesalary(credentials: any) {
    return this.http.post(`${this.url}/api/updatesalary`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  updateendtime(credentials: any) {
    return this.http.post(`${this.url}/api/updateendtime`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  updatestarttime(credentials: any) {
    console.log("err1")
    return this.http.post(`${this.url}/api/updatestarttime`, credentials).pipe(
      catchError(e => {
        console.log("err2")
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  activateaccount(credentials: any) {
    return this.http.post(`${this.url}/api/activateaccount`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  disableaccount(credentials: any) {
    return this.http.post(`${this.url}/api/disableaccount`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  sendreplay(credentials: any) {
    return this.http.post(`${this.url}/api/sendreplay`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewcomplaints(credentials: any) {
    return this.http.post(`${this.url}/api/viewcomplaints`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewcomplaintbyid(credentials: any) {
    return this.http.post(`${this.url}/api/viewcomplaintbyid`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  addcomplaint(credentials: any) {
    return this.http.post(`${this.url}/api/addcomplaint`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  rejectbooking(credentials: any) {
    return this.http.post(`${this.url}/api/rejectbooking`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  updatepassword(credentials: any) {
    return this.http.post(`${this.url}/api/updatepassword`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  checkpassword(credentials: any) {
    return this.http.post(`${this.url}/api/checkpassword`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }

  updateimage(credentials: any) {
    return this.http.post(`${this.url}/api/updateimage`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  updatephone(credentials: any) {
    return this.http.post(`${this.url}/api/updatephone`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  updatename(credentials: any) {
    return this.http.post(`${this.url}/api/updatename`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewreview(credentials: any) {
    return this.http.post(`${this.url}/api/viewreview`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  addreview(credentials: any) {
    return this.http.post(`${this.url}/api/addreview`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  markascomplete(credentials: any) {
    return this.http.post(`${this.url}/api/markascomplete`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  myearnings(credentials: any) {
    return this.http.post(`${this.url}/api/myearnings`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  deletebill(credentials: any) {
    return this.http.post(`${this.url}/api/deletebill`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  checkpayment(credentials: any) {
    return this.http.post(`${this.url}/api/checkpayment`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  savepayment(credentials: any) {
    return this.http.post(`${this.url}/api/savepayment`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  getkeyid(credentials: any) {
    return this.http.post(`${this.url}/api/getkeyid`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewbill(credentials: any) {
    return this.http.post(`${this.url}/api/viewbill`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  addbill(credentials: any) {
    return this.http.post(`${this.url}/api/addbill`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewmybookedworkers(credentials: any) {
    return this.http.post(`${this.url}/api/viewmybookedworkers`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }

  chatmsg(credentials: any) {
    return this.http.post(`${this.url}/api/chatmsg`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewchat(credentials: any) {
    return this.http.post(`${this.url}/api/viewchat`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewacceptedjobs(credentials: any) {
    return this.http.post(`${this.url}/api/viewacceptedjobs`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  acceptworker(credentials: any) {
    return this.http.post(`${this.url}/api/acceptworker`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewprofile(credentials: any) {
    return this.http.post(`${this.url}/api/viewprofile`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewmybookedjobs(credentials: any) {
    return this.http.post(`${this.url}/api/viewmybookedjobs`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewmybooking(credentials: any) {
    return this.http.post(`${this.url}/api/viewmybooking`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  bookworker(credentials: any) {
    return this.http.post(`${this.url}/api/bookworker`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewlocation(credentials: any) {
    return this.http.post(`${this.url}/api/viewlocation`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewmyworkersdetails(credentials: any) {
    return this.http.post(`${this.url}/api/viewmyworkersdetails`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewmyworkers(credentials: any) {
    return this.http.post(`${this.url}/api/viewmyworkers`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }

  viewJob(credentials: any) {
    return this.http.post(`${this.url}/api/viewjob`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
availablestatus(credentials: any) {
    return this.http.post(`${this.url}/api/availablestatus`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  updateWorker(credentials: any) {
    return this.http.post(`${this.url}/api/updateworker`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  
  viewWorkerdetails(credentials: any) {
    return this.http.post(`${this.url}/api/viewworkerdetails`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  deleteworkeraccount(credentials: any) {
    return this.http.post(`${this.url}/api/deleteworkeraccount`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  

  viewnotification(credentials: any) {
    return this.http.post(`${this.url}/api/viewnotification`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  notification(credentials: any) {
    return this.http.post(`${this.url}/api/notification`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewparticularnotification(credentials: any) {
    return this.http.post(`${this.url}/api/viewparticularnotification`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  deletenotififcation(credentials: any) {
    return this.http.post(`${this.url}/api/deletenotification`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  updatenotification(credentials: any) {
    return this.http.post(`${this.url}/api/updatenotification`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  countnotification(credentials: any) {
    return this.http.post(`${this.url}/api/countnotification`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  
  viewWorker(credentials: any) {
    return this.http.post(`${this.url}/api/viewworker`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewifworker(credentials: any) {
    return this.http.post(`${this.url}/api/viewifworker`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  addworker(credentials) {
    return this.http.post(`${this.url}/api/addworker`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  
  viewcategory(credentials) {
    return this.http.post(`${this.url}/api/viewcategory`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  addcategory(credentials) {
    return this.http.post(`${this.url}/api/addcategory`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  addlocation(credentials) {
    return this.http.post(`${this.url}/api/addlocation`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }

  //Registration
  checkotp(credentials) {
    return this.http.post(`${this.url}/api/checkotp`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  createotp(credentials) {
    return this.http.post(`${this.url}/api/createotp`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
 
  register(credentials) {
    return this.http.post(`${this.url}/api/register`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
 
  login(credentials) {
    return this.http.post(`${this.url}/api/login`, credentials)
      .pipe(
        tap(res => {
          console.log(res);
         
          this.storage.set(TOKEN_KEY, res['token']);
          this.a=res['token'];
          this.user = this.helper.decodeToken(res['token']);
          console.log(this.user);
          this.authenticationState.next(true);
        }),
        catchError(e => {
          this.showAlert(e.error.msg);
          throw new Error(e);
        })
      );
  }
 
  logout() {
    this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    });
  }
 
  getSpecialData() {
    return this.http.get(`${this.url}/api/special`).pipe(
      catchError(e => {
        let status = e.status;
        if (status === 401) {
          this.showAlert('You are not authorized for this!');
          this.logout();
        }
        throw new Error(e);
      })
    )
  }
 
  isAuthenticated() {
    console.log(this.authenticationState.value);
    return this.authenticationState.value;
  }
 
  showAlert(msg) {
    let alert = this.alertController.create({
      message: msg,
      header: 'Error',
      buttons: ['OK']
    });
    alert.then(alert => alert.present());
  }
}