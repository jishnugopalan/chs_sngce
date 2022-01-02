import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
declare var RazorpayCheckout:any;

@Component({
  selector: 'app-viewbill',
  templateUrl: './viewbill.page.html',
  styleUrls: ['./viewbill.page.scss'],
})
export class ViewbillPage implements OnInit {
total=0
bill=[]
keyid=""
sal=0
amt=0
paid=false
  //loadingController: any;
  constructor(private authService:AuthService,private router:Router,public toastController: ToastController,public loadingController:LoadingController) { }
  payWithRazorpay() {
    var options = {
      description: 'You are paying to CHS worker',
      image: '',
      currency: "INR", // your 3 letter currency code
      key: this.keyid, // your Key Id from Razorpay dashboard
      amount: this.amt*100, // Payment amount in smallest denomiation e.g. cents for USD
      name: 'Razorpay',
      //order_id:"order_DBJOWzybf0sJbb",
      prefill: {
        email: this.authService.user.email,
        contact: this.authService.user.phone,
        name: this.authService.user.name
      },
      theme: {
        color: '#528FF0'
      },
      modal: {
        ondismiss: async function () {
          alert('dismissed')
          const toast = await this.toastController.create({
            message:'Payment cancelled',
            duration: 2000
          });
          toast.present();
        }
      },
      "handler": function (response){

        console.log(response.razorpay_payment_id);
        if (typeof response.razorpay_payment_id == 'undefined' ||  response.razorpay_payment_id < 1) {
         console.log("a")
         
         
        } else {
          console.log("b")
         
          
        }


      },
     
    };

    var successCallback = function (payment_id) {
      alert('payment_id: ' + payment_id);
      console.log("payment successful")
      
      
      
      //this.paymentid=payment_id
      // this.authService.createorder({"userid":this.authService.user.id,"foodids":this.food,"paymentid":this.paymentid,"totalprice":this.price}).subscribe((res:any)=>{
      //   console.log(res);
      // })
      
      
    };

    var cancelCallback = function (error) {
      alert(error.description + ' (Error ' + error.code + ')');
    };
    

    

    RazorpayCheckout.open(options, successCallback, cancelCallback);
    // this.authService.createorder({"userid":this.authService.user.id,"foodids":this.food,"paymentid":this.paymentid,"totalprice":this.price}).subscribe((res:any)=>{
    //   console.log(res);
    // })
    
    RazorpayCheckout.on('payment.success', async (payment_id) => {
      console.log(payment_id)
      const loading = await this.loadingController.create({
        message: 'Please wait,do not press back...',
        translucent: true,
      });
      await loading.present();
      this.authService.savepayment({"userid":this.authService.user.id,"workerid":this.authService.workerid,"bookingid":this.authService.bookingid,"paymentid":payment_id.razorpay_payment_id,"payment":this.amt,"datetime":Date.now()}).subscribe(async (res:any)=>{
      console.log(res);
      loading.dismiss()
      const toast = await this.toastController.create({
        message:'Payment completed',
        duration: 2000
      });
      toast.present();
      this.ngOnInit()
      
      

    })
      
      });
      


  }
  getTotal(){
    console.log(this.total+this.sal)
    this.amt= Number(this.total)+Number(this.sal)
    return this.amt;

  }
  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: 'Please wait',
      translucent: true,
    });
    await loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 4000);
    this.authService.getkeyid({"workerid":this.authService.workerid}).subscribe((res:any)=>{
      console.log(res)
      this.keyid=res.keyid
      console.log(this.keyid)
      this.sal=res.job_salary
      
    })
    this.total=0

    this.authService.viewbill({"bookingid":this.authService.bookingid}).subscribe((res:any)=>{
      console.log(res)
      this.bill=res

      for(let i=0;i<res.length;i++){
        this.total=this.total+res[i].rate
      }
      
    })
    this.authService.checkpayment({"bookingid":this.authService.bookingid}).subscribe((res:any)=>{
      console.log(res)
      this.paid=true
    })
   // this.amt=this.total+this.sal
  }

}
