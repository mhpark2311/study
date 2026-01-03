CREATE TABLE users (
id integer primary key AUTOINCREMENT,
name text not null,
email text unique not null,
age integer,
created_at timestamp default CURRENT_TIMESTAMP
);

insert into users(name, email, age) VALUES ('田中', 'tanaka@example.com', 28),
('佐藤', 'sato@example.com', 33),
('鈴木', 'suzuki@example.com', NULL),
('山田', 'yamada@example.com', 19),
('渡辺', 'watanabe@example.com', 41);

--Q1. 年齢が20歳以上のユーザー全員の name と age を表示せよ。年齢が高い順に並べる。

select * from users where age < 20;

-- name,ageカラムを読む
select name , age from users;

drop table if exists users;

CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  age INTEGER,
  country TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (name, email, age, country) VALUES
('田中', 'tanaka@example.com', 28, 'Japan'),
('佐藤', 'sato@example.com', 33, 'Japan'),
('鈴木', 'suzuki@example.com', NULL, 'USA'),
('山田', 'yamada@example.com', 19, 'Japan'),
('渡辺', 'watanabe@example.com', 41, 'Canada'),
('Lee', 'lee@example.com', 25, 'Korea'),
('Wang', 'wang@example.com', 31, 'China'),
('John', 'john@example.com', NULL, 'USA'),
('Maria', 'maria@example.com', 22, 'Mexico'),
('Kim', 'kim@example.com', 27, 'Korea');

-- SELECT 練習問題 10問
-- ① name と email をすべて取得せよ
select name,email from users;

-- ② age が 30 歳以上のユーザーの name と age を取得せよ
-- （年齢の高い順）
select name,age from users where age >= 30;
-- select name,age from users where age <= 30;
select name,age from users where age >= 30 order by age desc;
select name,age from users where age >= 30 order by age asc;

-- ③ 年齢が不明（NULL）のユーザーの name を取得せよ
-- IS NULL
-- NG : select name from users where age = null;
select name from users where age is null;

-- ④ country が Japan のユーザーの name と country を取得せよ
-- （国名は完全一致）
select name,country from users where country IS 'Japan'; -- SQLiteならOK
-- SQL的には IS は 基本的に NULL/TRUE/FALSE 比較用
select name,country from users where country = 'Japan';

-- ⑤ email に example.com を含むユーザーを全員取得せよ
-- （LIKE を使う）
-- NG : select * from users where email like 'example.com';
select * from users where email like '%example.com%';
select * from users where email like '%na%';

-- ⑥ age が 20 〜 30 のユーザーだけ取得せよ
-- （BETWEEN を使う）
select * from users where age between 20 and 30;
