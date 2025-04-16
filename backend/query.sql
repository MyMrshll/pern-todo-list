create table todos(
    id serial primary key,
    title varchar(255) not null,
    description text,
    completed boolean default false,
    created_at timestamp default now()
);

insert into todos (title, description, completed) values ('Buy groceries', 'Milk, eggs, bread', false);

update todos set completed = true where id = 1;

alter table todos add column created_at timestamp default now();

truncate table todos;

drop table todos;