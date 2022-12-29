import { DatePipe, formatDate } from '@angular/common';
import { Component, DebugElement, Input, OnInit } from '@angular/core';

import { DisplayCategoryService } from 'src/app/Services/display-category.service';
import { LoadingService } from '../loading.service';
import { DisplayCategory } from '../Model/displayCategory.model';
import { Input_procedure } from '../Model/inputProcedure.model';

@Component({
  selector: 'app-display-category',
  templateUrl: './display-category.component.html',
  styleUrls: ['./display-category.component.css']
})
export class DisplayCategoryComponent implements OnInit {
  model:any;
  model2:any;
  loading$ = this.loader.loading$;

  displayCategory : DisplayCategory[] = [];
  inputProcedure!: Input_procedure;

  public fromdate: any="01-Jan-0000";
  public year:any="0000";
  public todate:any="01-Jan-0000";

  public month_m: any="Mar";
  public month_j: any="Jan";
  public month_f: any="Feb";
    

  constructor(private displayService: DisplayCategoryService, public datepipe: DatePipe, public loader: LoadingService){}

  ////for extra date for todate
  // inputDateto(event:any){
  //   this.inputProcedure=event;
  //   var selecteddate: any = new Date(this.inputProcedure.year,this.inputProcedure.month-1,this.inputProcedure.day,0,0,0 );
  //   let transformdate = this.datepipe.transform(selecteddate,('dd-MMM-yyyy'));//get date month year 
  //   // this.inputProcedure.FinYear=this.datepipe.transform(transformdate,('yyyy'));//get year
  //   // this.inputProcedure.ToDate=transformdate;
  //   this.inputProcedure.ToDate=transformdate;
  //   this.todate=transformdate;
  //   this.inputProcedure.FromDate=this.fromdate;
  //   this.inputProcedure.FinYear=this.year;
    
  //   //calling services 
  //   this.displayService.getDisplayCategoryReport(this.inputProcedure.FinYear, this.inputProcedure.FromDate,this.inputProcedure.ToDate).subscribe((result)=>{
  //     document.getElementById('myTable-2')!.style.visibility='visible';
  //     this.displayCategory=result;
  //   });
    
    
  // }
  inputDatefrom(event:any){
    this.displayCategory=[];
    console.log(event);
    this.inputProcedure=event;
    var selecteddate: any = new Date(this.inputProcedure.year,this.inputProcedure.month-1,this.inputProcedure.day,0,0,0 );
    let transformdate = this.datepipe.transform(selecteddate,('dd-MMM-yyyy'));//get date month year 
    this.inputProcedure.FinYear=this.datepipe.transform(transformdate,('yyyy'));//get year
    this.inputProcedure.ToDate=transformdate;
    this.fromdate=transformdate;
    let cal_fin_year = this.datepipe.transform(transformdate,('MMM'));;
    if(cal_fin_year === this.month_j ||cal_fin_year === this.month_f || cal_fin_year === this.month_m)
     {
       let yearback = this.inputProcedure.FinYear-1;
       this.inputProcedure.FinYear=yearback;//reduced year auto by-1 method in FinYear
     //  console.log(yearback);
       this.inputProcedure.FromDate='01-Apr-'+yearback;
       yearback=yearback+++1;
       this.inputProcedure.finyear = yearback;
    //   //console.log(this.inputProcedure.finyear);
     }
     else{
       let yearback222 = this.inputProcedure.FinYear;
       yearback222=yearback222+++1;
       this.inputProcedure.finyear = yearback222;
      //console.log(this.inputProcedure.finyear);
      this.inputProcedure.FromDate='01-Apr-'+this.inputProcedure.FinYear;
     }
    ////if(this.todate != '01-Jan-0000')
    //console.log(this.inputProcedure.FinYear);
    //calling services 
   
      this.displayService.getDisplayCategoryReport(this.inputProcedure.FinYear, this.inputProcedure.FromDate,this.inputProcedure.ToDate).subscribe((result)=>{
        
        this.displayCategory=result;
        
      });
      document.getElementById('myTable-2')!.style.visibility='visible'; 
      document.getElementById('date')!.style.visibility='visible';
      document.getElementById('year')!.style.visibility='visible';
  }
  ngOnInit(): void {} 
}



