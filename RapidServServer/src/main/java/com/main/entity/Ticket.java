package com.main.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="T_TICKET")
public class Ticket {
	
	private static final long serialVersionUID = 21313L;
	
	@Id
	protected Long id;
	
	@Column(name="CREATEDBY")
	protected String createdBy;
	
	@Column(name="DESCRIPTION")
	protected String description;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

}
