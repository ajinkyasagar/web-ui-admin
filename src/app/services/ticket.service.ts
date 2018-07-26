import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TicketService {
  constructor(private http: HttpClient) { }
  
  getTickets(){
  return this.http.get<any[]>('http://localhost:8080/OpenTickets');
  }
  
  getTicket(ticketId){
  return this.http.get<any>('http://localhost:8080/getTicket?id='+ticketId);
  }
}