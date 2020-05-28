import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../app/services/api-service.service';
import {MatSort} from '@angular/material/sort';






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {
  title = 'fhir-app-test';
  dataSource: any; 
  currentTime: Date;
  

  @ViewChild(MatSort, {static: true}) sort : MatSort;



  constructor(
    private apiService: ApiService
  ) { }

 // dataSource = new MatTableDataSource(products);
 
  ngOnInit() {
    this.apiService.getPatients().subscribe(
      data => {
        console.log(data);
        this.currentTime = new Date();
        this.dataSource = data['entry'].filter(data => {
          
          if(data.resource.birthDate){
            console.log(data.resource.birthDate)
            let year = new Date(data.resource.birthDate).getFullYear();
            console.log(year);
               return year >= 1958 && year <= 1965 
          }
        }).sort((a,b) => new Date(a.resource.birthDate).getFullYear() - new Date(b.resource.birthDate).getFullYear());
          
            
     
     }
    )

  }

  displayedColumns: string[] = ['id','name', 'birthDate', 'gender'];

  

  formatName(nameObj){
    let name = '';
 
    name =  nameObj[0].given[0] + " " + nameObj[0].family ;
   
    return name;
    
  }
  



}


