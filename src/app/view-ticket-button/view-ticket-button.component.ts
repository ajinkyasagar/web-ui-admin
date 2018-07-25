import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { ViewCell } from 'ng2-smart-table';
import {MaterializeAction} from 'angular2-materialize';
import {Router} from "@angular/router";


@Component({
  selector: 'app-view-ticket-button',
  templateUrl: './view-ticket-button.component.html',
  styleUrls: ['./view-ticket-button.component.css']
})


export class ViewTicketButtonComponent implements ViewCell, OnInit {
  renderValue: string;
  modalActions = new EventEmitter<string|MaterializeAction>();

  @Output() save: EventEmitter<any> = new EventEmitter();
  @Input() value: string | number;
  @Input() rowData: any;

  constructor(private router: Router) { 
    
  }

  ngOnInit() {
     this.renderValue = this.value.toString().toUpperCase();
  }

  onClickView() {
    console.log(this.rowData);
    //this.save.emit(this.rowData);
    this.router.navigate(['viewticket',this.rowData.id]);
  }
}
