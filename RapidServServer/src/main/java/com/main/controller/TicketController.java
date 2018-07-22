package com.main.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.main.entity.Ticket;
import com.main.repository.TicketRepository;

@RestController
public class TicketController {

	@Autowired
	protected TicketRepository ticketRepository;
	
	@RequestMapping("/Tickets")
	public List<Ticket> getAllTickets(){ 
		List<Ticket> tickets = new ArrayList<>();
		ticketRepository.findAll().forEach(ticket -> tickets.add(ticket));
		return tickets;
	}
	
}
