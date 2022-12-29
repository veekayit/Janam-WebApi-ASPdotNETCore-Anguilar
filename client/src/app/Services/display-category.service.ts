import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DisplayCategory } from '../Component/Model/displayCategory.model';
import { Input_procedure } from '../Component/Model/inputProcedure.model';

@Injectable({
  providedIn: 'root'
})
export class DisplayCategoryService {

 
 
  constructor(private http: HttpClient) { }
 
  public getDisplayCategoryReport(year:any,fromdate:any, todate?:any): Observable<Array<DisplayCategory>> {
    
    return this.http.get<Array<DisplayCategory>>
  (`${environment.baseApiUrl}FinYear=`+year+'&FromDate='+fromdate +'&ToDate='+todate);
    
  }
}
