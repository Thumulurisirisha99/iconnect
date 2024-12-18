import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import * as moment from 'moment'; 
import 'moment/locale/es' ; 

@Component({
  selector: 'app-ctc',
  templateUrl: './ctc.component.html',
  styleUrls: ['./ctc.component.sass']
})
export class CtcComponent implements OnInit {
  loggedUser: any = {};
  userData: any;
  myDate:any;
  EmpInfo:any;
  LoginParams:any;
  empObj: any;
  public isLoading: boolean;
  constructor(public router: Router,private authService: AuthService) { }

  ngOnInit(): void {
   // this.loggedUser = atob(localStorage.getItem('userData'));
   // let LoginParams = atob(localStorage.getItem('loginData'))

    this.loggedUser = decodeURIComponent(window.atob(localStorage.getItem('userData')));
    let LoginParams = decodeURIComponent(window.atob(localStorage.getItem('loginData')));
    this.LoginParams= JSON.parse(LoginParams);
    this.userData = JSON.parse(this.loggedUser);
   // this.myDate = atob(localStorage.getItem('currentDate'));
    this.myDate = decodeURIComponent(window.atob(localStorage.getItem('currentDate')));
    // passing empObj to getApiData() 
    let emp = [{ 'empID': "" +this.userData.user.empID+ "", 
                'Password': ""+this.LoginParams.password+"",
                'HRMSEMPLOYEEID': "" +this.userData.user.hrmsemployeeid+ "" }];
    this.empObj =  emp[0];
    // console.log( this.empObj )
    this.getApiData(); 


    // no user in session navigate to login 
    if (this.loggedUser == null || this.loggedUser == undefined) {
      this.router.navigate(['/login'], { replaceUrl: true });
    } 
    //after routing page load at top
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });



  }
  // End of NgOninit 


    getApiData(){
      this.isLoading = true;

      this.authService.empCtc_view(this.empObj).subscribe(res=>{
        // console.log(res.ctcview[0])
        if(res){
          this.isLoading = false;
          this.EmpInfo = res.ctcview;
        }
        
      },err => {
        console.log(err);
        this.router.navigate(['/errorPage', {errorType: err.status}]);
      }) 
    }


}
