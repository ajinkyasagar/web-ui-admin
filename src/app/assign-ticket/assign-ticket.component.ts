import { Component, OnInit, EventEmitter } from '@angular/core';
import { LocalDataSource} from 'ng2-smart-table';

@Component({
  selector: 'app-assign-ticket',
  templateUrl: './assign-ticket.component.html',
  styleUrls: ['./assign-ticket.component.css']
})
export class AssignTicketComponent implements OnInit {
public enableAssign: boolean;
  localsourceresources: LocalDataSource;
  
  settingsresources = {
    actions: {add: false, edit: false, delete: false},
    columns: {}
      
  };

  
  
  constructor() { }

  ngOnInit() {
  }

}
