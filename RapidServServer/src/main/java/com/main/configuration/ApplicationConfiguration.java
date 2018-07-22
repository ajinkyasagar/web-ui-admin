package com.main.configuration;

import javax.sql.DataSource;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder;

@Configuration
@EnableJpaRepositories("com.main.repository")
@EntityScan("com.main.entity")
@PropertySource("classpath:db/db-config.properties")
public class ApplicationConfiguration {

	public ApplicationConfiguration(){
		
	}
	
	@Bean
	public DataSource dataSource(){
		DataSource datasource = (new EmbeddedDatabaseBuilder())
				.addScript("classpath:db/schema.sql")
				.addScript("classpath:db/data.sql").build();
		return datasource;
	}
	
}
