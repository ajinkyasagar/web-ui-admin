import { Component, OnInit,EventEmitter } from '@angular/core';
import { ViewTicketButtonComponent } from '../view-ticket-button/view-ticket-button.component';


@Component({
  selector: 'app-open-tickets-compoenent',
  templateUrl: './open-tickets-compoenent.component.html',
  styleUrls: ['./open-tickets-compoenent.component.css']
})
export class OpenTicketsCompoenentComponent implements OnInit {


  constructor() { }

  settings = {
    actions: { add: false, edit: false, delete: false },
  
    columns: {
      ticketid: {
        title: 'ID',
      },
      customername: {
        title: 'Customer Name'
      },
      contact: {
        title: 'Contact No.'
      },
      status: {
        title: 'Status',
        type: 'html'
      },
      view: {
        title: 'View',
        type: 'custom',
        filter: false,
        renderComponent: ViewTicketButtonComponent,
        onComponentInitFunction(instance) {
          instance.save.subscribe(row => {
            alert(`${row.ticketid} saved!`)
          });
        }
      }
    }
  };

  data = [
    {
      ticketid: "324234",
      customername: "test1",
      contact: "324324",
      view: 'view',
      status: '<div class="btn teal lighten-2">IN-PROGRESS</div>'
    },
    {
      ticketid: "2322324",
      customername: "test2",
      contact: "32424324",
      view: 'view',
      status: '<div class="btn pink accent-1">ASSIGNED</div>'
    },
    {
      ticketid: "112343543",
      customername: "test 4",
      contact: "324324",
      view: 'view',
      status: '<div class="btn red">Rejected</div>'
    }
  ];


  ngOnInit() {
  }

  render(){
    console.log("called function");
  }
}
