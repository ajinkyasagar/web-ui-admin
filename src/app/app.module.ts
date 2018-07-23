import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import { AppComponent } from './app.component';
import {MaterializeModule} from 'angular2-materialize';
import { RouterModule,Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { ViewTicketButtonComponent } from './view-ticket-button/view-ticket-button.component';
import { OpenTicketsCompoenentComponent } from './open-tickets-compoenent/open-tickets-compoenent.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';

const appRoutes: Routes = [
      { path:'dashboard',component:DashboardComponent }
    , { path:'createticket',component:CreateTicketComponent }
    ,{ path:'viewticket/:id',component:ViewTicketComponent }
    ];



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CreateTicketComponent,
    ViewTicketButtonComponent,
    OpenTicketsCompoenentComponent,
    ViewTicketComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    RouterModule.forRoot(appRoutes),
     Ng2SmartTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ViewTicketButtonComponent]
})
export class AppModule { }
