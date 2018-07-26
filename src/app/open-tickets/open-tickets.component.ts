import {Component, OnInit, EventEmitter} from '@angular/core';
import {ViewTicketButtonComponent} from '../view-ticket-button/view-ticket-button.component';
import {Router} from "@angular/router";
import {HttpClient} from '@angular/common/http';
import {ServerDataSource, LocalDataSource} from 'ng2-smart-table';
import {TicketService} from '../services/ticket.service';

@Component({
  selector: 'app-open-tickets',
  templateUrl: './open-tickets.component.html',
  styleUrls: ['./open-tickets.component.css'],
  providers: [TicketService]
})
export class OpenTicketsComponent implements OnInit {
  public enableAssign: boolean;
  public currentTicketId: string;
  source: ServerDataSource;
  localsource: LocalDataSource;
  constructor(private router: Router, http: HttpClient, private ticketService: TicketService) {
    this.localsource = new LocalDataSource();
    //    this.source = new ServerDataSource(http, {endPoint: 'http://localhost:8080/OpenTickets'});
    this.ticketService.getTickets().subscribe((data) => {
    console.log(data);
    this.localsource.load(data);
    });
  }

  settings2 = {
    actions: {add: false, edit: false, delete: false},
    columns: {
      id: {
        title: 'Ticket ID',
        filter: true
      },
      createdBy: {
        title: 'Initiator'
      },
      description: {
        title: 'Description'
      },
      status: {
        title: 'Status',
        type: 'html',
        valuePrepareFunction: (cell, row) => {return '<div class="rcorners-teal">' + cell + '</div>';}
      },
      view: {
        title: 'View',
        type: 'custom',
        filter: false,
        renderComponent: ViewTicketButtonComponent,
        onComponentInitFunction(instance) {
          instance.save.subscribe(row => {
            alert(`${row.id} saved!`);
          });
        }
      }
    },
  };

  ngOnInit() {
  }
  onRowClick(event) {
    console.log("on row click" + event);
    if (event.isSelected) {
      this.currentTicketId = event.selected[0].id;
      if (event.selected[0].status.indexOf("SUBMITTED") > -1) {
        this.enableAssign = true;
      } else {
        this.enableAssign = false;
      }
    }


  }

  onClickAssign() {
    console.log(this.currentTicketId);
    this.router.navigate(['assignticket', this.currentTicketId]);
  }

  render() {
    console.log("called function");
  }
}