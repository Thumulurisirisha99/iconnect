import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobcode',
  templateUrl: './jobcode.component.html',
  styleUrls: ['./jobcode.component.sass']
})
export class JobcodeComponent implements OnInit {
  userData:any;
  sublocation:any;
  myDate:any;
  constructor() { }
  ngOnInit(): void {
    let loggedUser = decodeURIComponent(window.atob(localStorage.getItem('userData')));
    this.userData = JSON.parse(loggedUser);
    this.myDate = decodeURIComponent(window.atob(localStorage.getItem('currentDate')));
    //this.sublocation = this.userData.user.sublocation;
    
  }
  isHomeOpen = false;
  isAboutUsOpen = false;

  // Icons for each section
  homeIcon = 'fa fa-chevron-up';
  aboutUsIcon = 'fa fa-chevron-down';
  toggleSection(section: string): void {
    if (section === 'home') {
      this.isHomeOpen = !this.isHomeOpen;
      this.homeIcon = this.isHomeOpen ? 'fa fa-chevron-up' : 'fa fa-chevron-down';
    } 
  }
}
