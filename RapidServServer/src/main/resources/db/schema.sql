drop table T_TICKET if exists;

create table T_TICKET (ID bigint identity primary key, 
CREATEDBY varchar(50) not null,
DESCRIPTION varchar(500) not null);