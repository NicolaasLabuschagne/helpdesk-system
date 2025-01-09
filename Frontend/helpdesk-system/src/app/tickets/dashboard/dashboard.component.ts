import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../shared/services/ticket.service';
import { Ticket } from '../../shared/models/ticket.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  tickets: Ticket[] = [];

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.ticketService.getTickets().subscribe((data) => {
      this.tickets = data;
    });
  }
}
