import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
 
  {
    path: 'inside',
    loadChildren: () => import('./pages/inside/inside.module').then( m => m.InsidePageModule),
   canActivate: [AuthGuardService]
  },
  {
    path: 'demo',
    loadChildren: () => import('./demo/demo.module').then( m => m.DemoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('./password/password.module').then( m => m.PasswordPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'workeraccout',
    loadChildren: () => import('./users/workeraccout/workeraccout.module').then( m => m.WorkeraccoutPageModule)
  },
  {
    path: 'adminhome',
    loadChildren: () => import('./admin/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'addworker',
    loadChildren: () => import('./admin/addworker/addworker.module').then( m => m.AddworkerPageModule)
  },
  {
    path: 'addcategory',
    loadChildren: () => import('./admin/addcategory/addcategory.module').then( m => m.AddcategoryPageModule)
  },
  {
    path: 'viewworkers',
    loadChildren: () => import('./admin/viewworkers/viewworkers.module').then( m => m.ViewworkersPageModule)
  },
  {
    path: 'approveworkers',
    loadChildren: () => import('./admin/approveworkers/approveworkers.module').then( m => m.ApproveworkersPageModule)
  },
  {
    path: 'joblist',
    loadChildren: () => import('./users/joblist/joblist.module').then( m => m.JoblistPageModule)
  },
  {
    path: 'workerslist',
    loadChildren: () => import('./users/workerslist/workerslist.module').then( m => m.WorkerslistPageModule)
  },
  {
    path: 'bookworker',
    loadChildren: () => import('./users/bookworker/bookworker.module').then( m => m.BookworkerPageModule)
  },
  {
    path: 'mybookings',
    loadChildren: () => import('./worker/mybookings/mybookings.module').then( m => m.MybookingsPageModule)
  },
  {
    path: 'viewjobdetails',
    loadChildren: () => import('./worker/viewjobdetails/viewjobdetails.module').then( m => m.ViewjobdetailsPageModule)
  },
  {
    path: 'myjobs',
    loadChildren: () => import('./worker/myjobs/myjobs.module').then( m => m.MyjobsPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'bookedworkers',
    loadChildren: () => import('./users/bookedworkers/bookedworkers.module').then( m => m.BookedworkersPageModule)
  },
  {
    path: 'sendbill',
    loadChildren: () => import('./worker/sendbill/sendbill.module').then( m => m.SendbillPageModule)
  },
  {
    path: 'viewbill',
    loadChildren: () => import('./users/viewbill/viewbill.module').then( m => m.ViewbillPageModule)
  },
  {
    path: 'myearnings',
    loadChildren: () => import('./worker/myearnings/myearnings.module').then( m => m.MyearningsPageModule)
  },
  {
    path: 'addreview',
    loadChildren: () => import('./users/addreview/addreview.module').then( m => m.AddreviewPageModule)
  },
  {
    path: 'editprofile',
    loadChildren: () => import('./editprofile/editprofile.module').then( m => m.EditprofilePageModule)
  },
  {
    path: 'changepassword',
    loadChildren: () => import('./changepassword/changepassword.module').then( m => m.ChangepasswordPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'complaints',
    loadChildren: () => import('./complaints/complaints.module').then( m => m.ComplaintsPageModule)
  },
  {
    path: 'viewcomplaints',
    loadChildren: () => import('./viewcomplaints/viewcomplaints.module').then( m => m.ViewcomplaintsPageModule)
  },
  {
    path: 'viewcomplaintbyadmin',
    loadChildren: () => import('./admin/viewcomplaintbyadmin/viewcomplaintbyadmin.module').then( m => m.ViewcomplaintbyadminPageModule)
  },
  {
    path: 'viewworker',
    loadChildren: () => import('./admin/viewworker/viewworker.module').then( m => m.ViewworkerPageModule)
  },
  {
    path: 'updatedetails',
    loadChildren: () => import('./worker/updatedetails/updatedetails.module').then( m => m.UpdatedetailsPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
