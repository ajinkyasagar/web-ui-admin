import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ResourceService {
  constructor(private http: HttpClient) { }
  
  getAllResources(){
  return this.http.get<any[]>('http://localhost:8080/getResources');
  }

}