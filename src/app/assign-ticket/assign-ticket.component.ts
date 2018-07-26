import {Component, OnInit, EventEmitter} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {ResourceService} from '../services/resources.service';

@Component({
  selector: 'app-assign-ticket',
  templateUrl: './assign-ticket.component.html',
  styleUrls: ['./assign-ticket.component.css'],
  providers: [ResourceService]
})
export class AssignTicketComponent implements OnInit {
  public enableAssign: boolean;
  localsourceresources: LocalDataSource;

  settingsresources = {
    actions: {add: false, edit: false, delete: false},
    columns: {
      actions: {add: false, edit: false, delete: false},
      columns: {
        id: {
          title: 'ID',
          filter: true
        },
        name: {
          title: 'Name'
        },
        location: {
          title: 'Location'
        },
        type: {
          title: 'Type'
        },
        contact: {
          title: 'Contact'
        }
      }
    }

  };



  constructor(private resourceService : ResourceService) {
    this.localsourceresources = new LocalDataSource();
    this.resourceService.getAllResources().subscribe((data) => {
      console.log(data);
      this.localsourceresources.load(data);
    });
  
  }

  ngOnInit() {
  }

}
