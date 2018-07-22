package com.main.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;

import com.main.entity.Ticket;

public interface TicketRepository extends Repository<Ticket,Long> {

	Iterable<Ticket> findAll();
	
	@Query("select count(*) from Ticket")
	public long countTickets();
}
