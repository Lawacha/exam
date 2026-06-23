create table user(
    id int primary key,
    username varchar(50) unique not null,
    password varchar(10) not null,
    email varchar(20) not null unique
);