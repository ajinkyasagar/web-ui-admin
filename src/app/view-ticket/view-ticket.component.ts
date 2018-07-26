import { Component, OnInit,EventEmitter } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {MaterializeAction} from 'angular2-materialize';
import {TicketService} from '../services/ticket.service';


@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.css'],
  providers: [TicketService]
})
export class ViewTicketComponent implements OnInit {
  modalActions = new EventEmitter<string|MaterializeAction>();
  ticketId: string;
  currentTicket:any;
  isDataLoaded:boolean=false;
  
  constructor(private route: ActivatedRoute,private ticketService: TicketService) {
    this.route.params.subscribe(params => { console.log(params); this.ticketId = params.id });
    console.log(this.ticketId);
    this.ticketService.getTicket(this.ticketId).subscribe(data => {this.currentTicket = data; this.isDataLoaded=true; console.log(data);});

  }
  ngOnInit() {

  }

}
