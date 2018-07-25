import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import { AppComponent } from './app.component';
import {MaterializeModule} from 'angular2-materialize';
import { RouterModule,Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { ViewTicketButtonComponent } from './view-ticket-button/view-ticket-button.component';
import { OpenTicketsComponent } from './open-tickets/open-tickets.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { AssignTicketComponent } from './assign-ticket/assign-ticket.component';
import { HttpClientModule } from '@angular/common/http';
import {TicketService} from './services/ticket.service';

const appRoutes: Routes = [
      { path:'dashboard',component:DashboardComponent }
    , { path:'createticket',component:CreateTicketComponent }
    ,{ path:'viewticket/:id',component:ViewTicketComponent }
    ,{ path:'assignticket/:id',component:AssignTicketComponent}
    ];



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CreateTicketComponent,
    ViewTicketButtonComponent,
    OpenTicketsComponent,
    ViewTicketComponent,
    AssignTicketComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    RouterModule.forRoot(appRoutes),
     Ng2SmartTableModule,
     HttpClientModule
  ],
  providers: [TicketService],
  bootstrap: [AppComponent],
  entryComponents:[ViewTicketButtonComponent]
})
export class AppModule { }
