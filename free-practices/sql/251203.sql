CREATE TABLE users2 (
id integer primary key AUTOINCREMENT,
name text not null,
age integer
);

insert into users2 (name,age) values ('Taro', 25);
insert into users2 (name,age) values ('Hanako', 20);

update users2 set age = 30 where id = 1;

-- delete from users where id = 2;

-- DELETE FROM users
-- WHERE id = 1;

select * from users2;

delete from users2 where id = 2;