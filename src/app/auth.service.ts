import { Injectable } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,BehaviorSubject } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class AuthService {  
   
    
  // production public path 
  // new URL 
 baseUrl: any = "https://sso.heterohcl.com/heteroiconnect/";
 imgbase: any = "https://sso.heterohcl.com/";
 
 
   // test path 
  //  baseUrl: any = "http://192.168.30.223:8000/heteroiconnect/"; 
  //  imgbase:any = "http://192.168.30.223:8000/"; 

   // Local path   
  // baseUrl: any = "http://172.19.1.116:8094/";  
  // imgbase:any = "http://172.19.1.116:8094/";
  
   //baseUrl: any = "http://192.168.214.220:8094/"; 
   //imgbase:any = "http://192.168.214.220:8094/";
   
  
  constructor(public router: Router, private http: HttpClient) { }
 

 
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data'
    })
  };

  public selectedCheckbox = new BehaviorSubject<any>('');
  data = this.selectedCheckbox.asObservable();


  updatedSelection(data) {
    this.selectedCheckbox.next(data);
  }
 
  public sendPostRequest(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'loginaction/login', data);
  }

  public panFirstverify(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'profile/pan_first_verify', data);
  }  
  
  public panValid(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'profile/login_pan_employee_verification', data);
  }

  public correctionPAN(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'profile/login_pan_employee_upload', data);
  }
  //profile/login_pan_employee_upload
   
  public experience(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'loginaction/experience', data);
  }
   
  // public todayLogins(data: any): Observable<any> {
  //   return this.http.post<any>(this.baseUrl + 'loginaction/todaylogin', data);
  // }
  public todayLoginTime(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'loginaction/todaylogintime', data);
  }
  public announcement(data:any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'loginaction/announcement', data);
  }
 
  public loginSession(data:any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'loginaction/session', data);
  } 

  public HRpolicies(data:any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'loginaction/hrdocuments', data);
  } 
  
  // public demo(data:any):Observable<any>{
  //   return this.http.post('http://androidapp.heterohcl.com/officesisto/iconapp/Bu_emplist',data);
  // }

  public attendance(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'loginaction/attendance', data);
  }
  public leavequota(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'loginaction/leavequota', data);
  }
  public locationsearch(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'loginaction/locationsearch', data);
  } 
  public applyleave(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'leavemanagement/applyleave', data);
  } 
  
  public holidaylist(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'loginaction/holidaylist', data);
  }
  public department(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'loginaction/department', data);
  }
  
  public birthdaylist(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'loginaction/birthdaylist', data);
  }

  public leavesummary(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'loginaction/leavesummary', data);
  }
 
  public cancleLeaveReq(data:any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'loginaction/LeaveSelfCancel', data);
  }
  public attrequest(data:any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'loginaction/attrequest', data);
  }
  public transactiondates(data:any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'loginaction/transactiondates', data);
  }
  
  public changepassword(data:any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'loginaction/changepassword', data);
  }
  public profilepicview(data:any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'loginaction/profilepicview', data);
  }
  // public profilepic(data:any): Observable<any> {   
  //   return this.http.post<any>(this.baseUrl + 'loginaction/profilepic', data);
  // }
  public empverify(data:any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'forgot/empverify', data);
  }
  public getOtp(data:any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'forgot/getotp', data);
  }
  public otpverify(data:any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'forgot/otpverify', data);
  }
  public forgotpassword(data:any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'forgot/forgotpassword', data);
  }
  public Leavetypes(data:any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'leavemanagement/Leavetypes', data);
  }
  public eligibleleaves(data:any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'leavemanagement/eligibleleaves', data);
  }
  

  addFileUplaodService(model: any) {
    return this.http.post(this.baseUrl + 'loginaction/profilepic', model, {responseType: 'text'} )
      .toPromise()
      .then(response => response.toString())
      // .catch(this.handleError);
  }

  public removeProPic(data:any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'profile/remove_profilepic', data);
  }
  public itsDocs(data:any):Observable<any>{
    return this.http.post<any>(this.baseUrl+'employeeflexi/ITS', data);
  }   

  public empPayslips(data:any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'employeeflexi/payslips', data);
  }
  
  public empAppraisal(data:any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'loginaction/appraisal', data);
  }
  public empCtc_view(data:any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'ctcinfo/ctcview', data);
  }
  public editProfile_statesList(data:any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'location/states', data);
  }
  public editProfile_citiesList(data:any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'location/cities', data);
  }
  public emp_EditProfileRequest(data:any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'profile/employee_request', data);
  }
  public emp_EditRequest_Status(data:any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'profile/Request_Status', data);
  }
  public empRelationshipList(data:any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'location/Relations', data);
  }
  public bankNamesList(data:any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'location/BankDetails', data);
  }

  public empAccntFileUpload(data:any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'profile/fileupload', data);
  }
  public panverify(data:any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'profile/panverify', data);
  }
  public empVaccineDetails(data:any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'vaccine/empvaccinedetails', data);
  }
  public FmlyVaccineDetails(data:any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'vaccine/Family', data);
  }
  public vaccinetypes(data:any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'vaccine/vaccinetypes', data);
  }
  public vaccine_entry(data:any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'vaccine/vaccine_entry', data);
  }
  
  public family_vaccine(data:any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'vaccine/familyrequest', data);
  }
  //vaccine/familyrequest
  public getJDPdf(emp: string) {
    return this.http.get<any>(`${this.baseUrl}/Job/JobDescription/${emp}`, { responseType: 'arraybuffer' as 'json' });
  }
  public getPdf(emp: string, pwd: string, payperiod: string, bu: string) {
    return this.http.get<any>(`${this.baseUrl}/employeeflexi/get/pdf/${emp}/${pwd}/${payperiod}/${bu}`, { responseType: 'arraybuffer' as 'json' });
  }
  public getITPdf(emp: string, pwd: string, type: string) {
    return this.http.get<any>(`${this.baseUrl}/employeeflexi/get/ITpdf/${emp}/${pwd}/${type}`, { responseType: 'arraybuffer' as 'json' });
  }

  public getAppointmentPdf(emp: string, pwd: string, type: string) {
    return this.http.get<any>(`${this.baseUrl}/employeeflexi/get/letter/${emp}`, { responseType: 'arraybuffer' as 'json' });
  }

  public getIncrementPdf(emp: string, pwd: string, type: string) {
    return this.http.get<any>(`${this.baseUrl}/employeeflexi/get/incrementletter/${emp}`, { responseType: 'arraybuffer' as 'json' });
  }
   
   
  public CheckJDFILE(data:any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Job/JobDescription/checkJD', data);
  }
  
  public NoticeModel(emp: string): Observable<any> {

    return this.http.get<any>(`${this.baseUrl}/Job/Notice/${emp}`);
  }




  // ++++++++++ Manager APIs ++++++++++++++
  public managersummary(data:any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'loginaction/managersummary', data);
  }
  public Leaveaccept(data:any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'loginaction/Leaveaccept', data);
  }
  public manager_DeptAttendance(data:any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'department_attendance/manager_attendance', data);
  }
  // public managerattendancereq(data:any): Observable<any> {
  //   return this.http.post<any>(this.baseUrl + 'loginaction/managerattendancereq', data);
  // }
  public assessmentformlist(data:any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'assesment/assessmentformlist ', data);
  }
  public assessment_accesslink(data:any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'assesment/assessmentaccesslink ', data);
  }
 
  
// +++++++++++++ HR APIs +++++++++
public privileges(data:any): Observable<any> {
  return this.http.post<any>(this.baseUrl + 'employeerights/privileges', data);
}
public assesment_initiate(data:any): Observable<any> {
  return this.http.post<any>(this.baseUrl + 'assesment/initiate', data);
}
public assesment_apprvlreport(data:any): Observable<any> {
  return this.http.post<any>(this.baseUrl + 'assesment/assesementapprovalreport', data);
}
public assesment_permanentreport(data:any): Observable<any> {
  return this.http.post<any>(this.baseUrl + 'assesment/permanentreport', data);
}
public assesment_hrprocess(data:any): Observable<any> {
  return this.http.post<any>(this.baseUrl + 'assesment/hrprocess', data);
}
public assesment_extendreport(data:any): Observable<any> {
  return this.http.post<any>(this.baseUrl + 'assesment/assesementextendreport', data);
}
public assesment_fromview(data:any): Observable<any> {
  return this.http.post<any>(this.baseUrl + 'assesment/assesmentfromview', data);
}
public assmnt_emp_profiledata(data:any): Observable<any> {
  return this.http.post<any>(this.baseUrl + 'assesment/assementemployeeprofiledata', data);
}
public assmnt_feedback(data:any): Observable<any> {
  return this.http.post<any>(this.baseUrl + 'assesment/assessmentfeedback', data);
}
public assmnt_nextApproval(data:any): Observable<any> {
  return this.http.post<any>(this.baseUrl + 'assesment/nextApproval', data);
}
public assmnt_submit(data:any): Observable<any> {
  return this.http.post<any>(this.baseUrl + 'assesment/assessmentsubmit', data);
}

public saturdaypolicycheck(data:any): Observable<any>{
  return this.http.post<any>(this.baseUrl +'employeeflexi/saturdaypolicycheck', data);
}
public unfreeze_empinfo(data:any): Observable<any> {
  return this.http.post<any>(this.baseUrl + 'leavemanagement/empinfo', data);
}
public unfreeze_empTransctnDate(data:any): Observable<any> {
  return this.http.post<any>(this.baseUrl + 'leavemanagement/emptransaction', data);
}
public unfreeze_empshowleavetypes(data:any): Observable<any> {
  return this.http.post<any>(this.baseUrl + 'leavemanagement/empshowleavetypes', data);
}
public unfreeze_empReq(data:any): Observable<any> {
  return this.http.post<any>(this.baseUrl + 'leavemanagement/unfreezrequest', data);
}
public unfreezAttendanceReq(data:any): Observable<any> {
  return this.http.post<any>(this.baseUrl + 'leavemanagement/unfreezAttendanceReq', data);
}

public unfreez_Att_Req_add(data:any): Observable<any> {
  return this.http.post<any>(this.baseUrl + 'leavemanagement/unfreez_Att_Req_add', data);
}


public empFlexiPolcy_BU(data:any): Observable<any> {
  return this.http.post<any>(this.baseUrl + 'employeeflexi/employeebusinessunit', data);
}

public empFlexiGetList(data:any): Observable<any> {
  return this.http.post<any>(this.baseUrl + 'employeeflexi/flexilist', data);
}
public empFlexiAssignRemove(data:any): Observable<any> {
  return this.http.post<any>(this.baseUrl + 'employeeflexi/AssignRemove', data);
}
public empProfileEditReqsts(data:any): Observable<any> {
  return this.http.post<any>(this.baseUrl + 'profile/employee_view', data);
}
public saturdayflexilist(data:any): Observable<any> {
  return this.http.post<any>(this.baseUrl + 'employeeflexi/saturdayflexilist', data);
}
  
public saturdayAssignRemove(data:any): Observable<any> {
  return this.http.post<any>(this.baseUrl + 'employeeflexi/saturdayAssign', data);
}

public empHR_view(data:any): Observable<any> {
  return this.http.post<any>(this.baseUrl + 'profile/hr_view', data);
}
public empProfileEditReqstsApprove(data:any): Observable<any> {
  return this.http.post<any>(this.baseUrl + 'profile/Employee_Requests_Approve', data);
}
public empProfileEditReqstsCount(data:any): Observable<any> {
  return this.http.post<any>(this.baseUrl + 'profile/dashboard', data);
}
 
public reviewletter(data:any): Observable<any> {
  return this.http.post<any>(this.baseUrl + 'reviewletter/letter', data);
}

public Genrateletter(data:any): Observable<any> {
  return this.http.post<any>(this.baseUrl + 'reviewletter/Genrateletter', data);
}

public letterprivileges(data:any): Observable<any> {
  return this.http.post<any>(this.baseUrl + 'reviewletter/Appointmentlink', data);
}

public hikereviewletter(data:any): Observable<any> {
  return this.http.post<any>(this.baseUrl + 'increment/letter', data);
}
public incrementletterprivileges(data:any): Observable<any> {
  return this.http.post<any>(this.baseUrl + 'increment/incrementlink', data);
}
private masterurl: string = "http://192.168.215.159:8091/";
public getDepartments(): Observable<any> {
  return this.http.post<any>(this.masterurl + 'departments',  {}); 
}
public getDesignations():Observable<any>{
  return this.http.post<any>(this.masterurl + 'designations', {}); 
}
public getUniversitys():Observable<any>{
  return this.http.post<any>(this.masterurl + 'universitys', {}); 
}
public insertUniversity(formData: FormData): Observable<string> {
  return this.http.post<string>(this.masterurl + 'insertUniversity', formData);
}

public insertDepartment(formData:FormData):Observable<any>{
  return this.http.post<any>(this.masterurl + 'insertdepartment',formData); 
}
public insertDesignation(formData:FormData):Observable<any>{
  return this.http.post<any>(this.masterurl + 'insertdesignation',formData); 
}   
public updateUniversity(universityid: any, name: any,createdby: any,type:any): Observable<any> {
  return this.http.post<any>(`${this.masterurl}updateUniversity/${universityid}/${name}/${createdby}/${type}`, {});

}

public updateDesignation(designationid: any, name: any, code: any, status: any, modifiedby: any,type:any): Observable<any> {
  return this.http.post<any>(`${this.masterurl}updateDesignation/${designationid}/${name}/${code}/${status}/${modifiedby}/${type}`, {});

}

public updateDepartment(departmentid: any, name: any, code: any, status: any, modifiedby: any,type:any): Observable<any> {
  return this.http.post<any>(`${this.masterurl}updateDepartment/${departmentid}/${name}/${code}/${status}/${modifiedby}/${type}`, {});
}

public getBusinessunit(formData:FormData):Observable<any>{
  return this.http.post<any>(this.masterurl + 'businessunit', formData);
}
public assignDepartments(formData:FormData):Observable<any>{
  return this.http.post<any>(this.masterurl + 'assignDepartment', formData);
}
public assignDesignations(formData:FormData):Observable<any>{
  return this.http.post<any>(this.masterurl + 'assignDesignation', formData);
}
public assignDepartmentinsert(data: any[]): Observable<any> {
  return this.http.post<any>(this.masterurl + 'insertassigndepartment', data);
}
public assignDesignationinsert(data: any[]): Observable<any> {
  return this.http.post<any>(this.masterurl + 'insertassigndesignation', data);
}
//QUALIFICATIONS
getEduationLevel():Observable<any>{
  return this.http.post(this.masterurl + 'educationlevel', {})
}
getEducationqualification(formData:FormData):Observable<any>{
  return this.http.post(this.masterurl + 'educationqualifiaction', formData)
}
getEducationbranch(formData:FormData):Observable<any>{
  return this.http.post(this.masterurl + 'branch',formData)
}
insertQualification(formData:FormData):Observable<any>{
  return this.http.post(this.masterurl + 'insertqualificationlevel',formData)
}
insertbranch(formData:FormData):Observable<any>{
  return this.http.post(this.masterurl + 'insertbranch',formData)
}
getqualification():Observable<any>{
  return this.http.post(this.masterurl + 'getqualification',{})
}
getbranch():Observable<any>{
  return this.http.post(this.masterurl + 'getbranch',{})
}
editqualification(formData:FormData):Observable<any>{
  return this.http.post(this.masterurl + 'editqualificationlevel',formData)
}
editbranch(formData:FormData):Observable<any>{
  return this.http.post(this.masterurl + 'editbranch',formData)
}

//familydetails
private familydetailsUrl="http://192.168.214.109:1799"
empSubmit(formData: FormData): Observable<any> {
  return this.http.post<any>(`${this.familydetailsUrl}/empsubmit`, formData);
}

getEmpData(formData: FormData): Observable<Blob> {
  return this.http.post<Blob>(`${this.familydetailsUrl}/emptotaldata`, formData);
}

deleteEmployee(sno: number): Observable<any> {
  return this.http.put<any>(`${this.familydetailsUrl}/deletefamilymember/${sno}`, {});
}

updateEmployee(data: FormData): Observable<any> {
  return this.http.post<any>(`${this.familydetailsUrl}/empupdate`, data);
}

insertFamilyMember(data: FormData): Observable<any> {
  return this.http.post<any>(`${this.familydetailsUrl}/insertfamilymembers`, data);
}
//--------------Employee data----------
getEligibleleaveEmployees(formData:FormData):Observable<any>{
  return this.http.post<any>(this.masterurl + 'employeedata', formData);
}
//leaves
getleavedata(formData:FormData):Observable<any>{
  return this.http.post(this.masterurl + 'leaves',formData)
}
editleavdata(employeeLeaveDto:any){
  return this.http.post(this.masterurl + 'editleaves',employeeLeaveDto)
}
getunassigneddata(formData:FormData):Observable<any>{
  return this.http.post(this.masterurl + 'unassignedleaves',formData)
}
getleavesByAction(formData:FormData):Observable<any>{
  return this.http.post(this.masterurl + 'action',formData)
}
//reports
getPayperiodYears():Observable<any>{
  return this.http.get(this.masterurl + 'payperiodyear',{})
}
//download leave report pay period wise
getleavereportpaywise(formData:FormData):Observable<any>{
  return this.http.post(this.masterurl + 'leavereport',formData)
}
}
