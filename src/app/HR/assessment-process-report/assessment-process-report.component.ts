import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import * as XLSX from 'xlsx'; 
import * as moment from 'moment'; 
import 'moment/locale/es' ; 

@Component({
  selector: 'app-assessment-process-report',
  templateUrl: './assessment-process-report.component.html',
  styleUrls: ['./assessment-process-report.component.sass']
})
export class AssessmentProcessReportComponent implements OnInit {
  loggedUser: any = {};
  userData: any;
  myDate:any;
  empObj:any;
  assmntData:any;
  prcsdCls:any;
  isData:any;
  isLoading:boolean;
  authBoolean:boolean
  privil_eges:any= {};
  fileName= 'Assessment_Process_Report.xlsx';
  constructor(private authService: AuthService,public router: Router) { }
  
  ngOnInit(): void {
   // this.loggedUser = atob(localStorage.getItem('userData'))
    this.loggedUser = decodeURIComponent(window.atob(localStorage.getItem('userData')));
    this.userData = JSON.parse(this.loggedUser);
   // this.myDate = atob(localStorage.getItem('currentDate'));
    this.myDate =  decodeURIComponent(window.atob(localStorage.getItem('currentDate')));
    moment.locale('en');
   // let x = atob(localStorage.getItem('privileges'));
    let x = decodeURIComponent(window.atob(localStorage.getItem('privileges')));
    this.privil_eges =   JSON.parse(x).Rights;  
    let emp = [{ 'empID': "" + this.userData.user.empID + "" }];
    this.empObj = emp[0];
    this.getapiData();



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
// End of ngOnInit 

getapiData(){  
  this.authBoolean=false;
  for (let i = 0; i < this.privil_eges.length; i++) {   
    if(this.privil_eges[i].Assessment_Approvals_Report == "true"){ 
      this.authBoolean=true;
    }
  }
  if(this.authBoolean== false){
    let x = 'false'; 
    this.router.navigate(['/errorPage', {AuthrzdUser: x}]); 
  }
 
  this.isLoading = true;
  this.authService.assesment_apprvlreport(this.empObj).subscribe(
    (res)=>{   
      this.isLoading = false; 
      this.assmntData = res.assesementapprovalreport;
      this.isData = this.assmntData.length;
      // console.log(this.isData)
  })
}
exportexcel(): void {
  
  let element = document.getElementById('assmnt_Table');

  /* If the element is found */
  if (element) {
    // Convert table to sheet
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    // Process each cell to format dates
    for (const cellAddress in ws) {
      if (ws.hasOwnProperty(cellAddress)) {
        const cell = ws[cellAddress];
        if (cell && typeof cell.v === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(cell.v)) {
          // Check if the cell value is in the format YYYY-MM-DD and format it
          cell.v = cell.v; // Keep it as a string if already in desired format
        }
      }
    }

    /* Generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* Save to file */
    XLSX.writeFile(wb, this.fileName);
  } else {
    console.error('Table element not found');
  }
  
}

}
