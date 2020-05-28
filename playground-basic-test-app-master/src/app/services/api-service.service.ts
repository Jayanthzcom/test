import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { of } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getPatients() {
    //return this.httpClient.get(environment.queryURI + '/Patient',
    //  { headers: this.getHeaders() });
      return of(environment.testData);
  }

  getPatientsResources() {
    return this.httpClient.get(environment.queryURI + '/Patient',
      { headers: this.getHeaders() });
    //  return of(environment.testData);
  }

  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      'Content-Type': 'application/fhir+json',
      'Access-Control-Allow-Origin': '*'
    });
    return headers;
  }
}


