import { Component, OnInit,EventEmitter } from '@angular/core';
import { ViewTicketButtonComponent } from '../view-ticket-button/view-ticket-button.component';

 import {MaterializeAction} from 'angular2-materialize';


@Component({
  selector: 'app-open-tickets',
  templateUrl: './open-tickets.component.html',
  styleUrls: ['./open-tickets.component.css']
})
export class OpenTicketsComponent implements OnInit {

modalActions = new EventEmitter<string|MaterializeAction>();
  
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
      action:{
      title: 'Action',
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
      status: '<div class="rcorners-teal">IN-PROGRESS</div>'
      
    },
    {
      ticketid: "2322324",
      customername: "test2",
      contact: "32424324",
      view: 'view',
      status: '<div class="rcorners-blue">ASSIGNED</div>'
    },
    {
      ticketid: "112343543",
      customername: "test 4",
      contact: "324324",
      view: 'view',
      status: '<div class="rcorners-red">REJECTED</div>'
    },
    {
      ticketid: "112343543",
      customername: "test 4",
      contact: "324324",
      view: 'view',
      status: '<div class="rcorners-teal">SUBMITTED</div>',
      action: '<div href="#modal1" class="actionbtn modal-trigger" style="vertical-align:middle"><span>Assign</span></div>'
    }
  ];

  
   closeModal() {
    console.log("inclose");     
    this.modalActions.emit({action:"modal",params:['close']});
  }
  ngOnInit() {
  }

  render(){
    console.log("called function");
  }
}