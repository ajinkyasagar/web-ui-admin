import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.css']
})
export class ViewTicketComponent implements OnInit {
  ticketId: string;
  currentTicket:any;
  ticketData = [{ 
                  ticketId:"324234",
                  customerName:"test1",
                  contact:"8888606658",
                  address:"A101 MIDC wadgaon,pune",
                  status:"IN-PROGRESS",
                  assignedTo:"M Ambani"
                },
                {
                  ticketId:"2322324",
                  customerName:"test2",
                  contact:"324324",
                  address:"A101 MIDC wadgaon,pune",
                  status:"IN-PROGRESS",
                  assignedTo:"M Ambani"
                },
                {
                  ticketId:"112343543",
                  customerName:"test3",
                  contact:"324324",
                  address:"A101 MIDC wadgaon,pune",
                  status:"IN-PROGRESS",
                  assignedTo:"M Ambani"
                }]


  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => { console.log(params); this.ticketId = params.id });
    console.log(this.ticketId);

    for(let ticket of this.ticketData){
      if(this.ticketId==ticket.ticketId){
        this.currentTicket = ticket;
      }
    }
  }

  ngOnInit() {

  }

}
