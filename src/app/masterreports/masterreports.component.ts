import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-masterreports',
  templateUrl: './masterreports.component.html',
  styleUrls: ['./masterreports.component.sass']
})
export class MasterreportsComponent implements OnInit {
  userData: any;
  myDate: any;
  listofpayperioddates: any[] = [];
  leavereportdata: any[] = [];
  tableHeaders: any;
  sublocation: any;
  leaveReportForm: FormGroup; 
  selected: boolean = true; 
  public isLoading: boolean = false;
  constructor(private service: AuthService, private fb: FormBuilder) {}

  ngOnInit(): void {
    let loggedUser = decodeURIComponent(window.atob(localStorage.getItem('userData')));
    this.userData = JSON.parse(loggedUser);
    this.myDate = decodeURIComponent(window.atob(localStorage.getItem('currentDate')));
    this.sublocation = this.userData.user.sublocation;
    this.getpayyear();
    this.leaveReportForm = this.fb.group({
      selectedPayPeriodDate: [''] 
    });
    this.leaveReportForm.get('selectedPayPeriodDate')?.valueChanges.subscribe((value) => {
      //console.log('Selected Pay Period Date:', value);
      this.selected = !value; 
    });
  }

  getpayyear() {
    this.service.getPayperiodYears().subscribe((res: any) => {
      this.listofpayperioddates = res;
    });
  }

  onPayPeriodChange() {
    //console.log('Selected Pay Period Date:', this.leaveReportForm.get('selectedPayPeriodDate')?.value);
    if (this.leaveReportForm.get('selectedPayPeriodDate')?.value) {
      this.isLoading = true;
      this.downloadleavereport(this.leaveReportForm.get('selectedPayPeriodDate')?.value);
    }
  }

  downloadleavereport(year: any) {
    if (!this.leaveReportForm.get('selectedPayPeriodDate')?.value) {
      alert('Please select a pay period date: ' + year);
      return;
    }

    this.selected = false; 
    //this.isLoading = true;
    const formdata = new FormData();
    formdata.append('payperioddate', year);

    this.service.getleavereportpaywise(formdata).subscribe((res: any) => {
      //console.log('API Response:', res);
      this.leavereportdata = res;
      this.tableHeaders = Object.keys(this.leavereportdata[0]);
      this.isLoading = false;
    });
  }

  selectedyearreport(): void {
    //console.log('Report data:', this.leavereportdata);
    if (!this.leavereportdata || this.leavereportdata.length === 0) {
      alert('No data available to export.');
      return;
    }

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.leavereportdata);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    const fileName = this.sublocation ? `${this.sublocation}${this.leaveReportForm.get('selectedPayPeriodDate')?.value}_leavereport.xlsx` : 'leavereport.xlsx';
    XLSX.writeFile(wb, fileName);
  }
}
