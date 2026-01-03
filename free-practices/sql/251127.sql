-- INSERT INTO users (name, email, age, country) VALUES
-- ('田中', 'tanaka@example.com', 28, 'Japan'),
-- ('佐藤', 'sato@example.com', 33, 'Japan'),
-- ('鈴木', 'suzuki@example.com', NULL, 'USA'),
-- ('山田', 'yamada@example.com', 19, 'Japan'),
-- ('渡辺', 'watanabe@example.com', 41, 'Canada'),
-- ('Lee', 'lee@example.com', 25, 'Korea'),
-- ('Wang', 'wang@example.com', 31, 'China'),
-- ('John', 'john@example.com', NULL, 'USA'),
-- ('Maria', 'maria@example.com', 22, 'Mexico'),
-- ('Kim', 'kim@example.com', 27, 'Korea');

-- ⑦ 国ごとにユーザー数を集計し、country と人数を表示せよ
-- （GROUP BY を使う）
-- 実際に起きてる動作（内部処理風）
-- 1. users から全部データを見る
-- 2. country 列でまとめる
-- 3. まとめたグループ内のデータ数を COUNT(*) で数える
-- 4. country, COUNT(*) をセットで返す
select country, COUNT(*) AS user_count from users group by country;

-- ⑧ 国ごとの平均年齢を計算し、平均が高い国から順に表示せよ
-- （NULL は計算に含まれない）
select country, avg(age) as avg_age from users
where age is not null
group by country
order by avg_age desc;

-- ⑨ name が「a」を含むユーザーだけの name を取得せよ
-- （大小文字は問わない。ヒント：LIKE + %）
-- SQLiteなので全て同じ結果
INSERT INTO users (name, email, age, country)
VALUES ('Alice','alice@example.com',20,'USA');
select name from users where name like '%a%';
select name from users where name like '%A%';
select name from users where lower(name) like '%a%';

-- ⑩ 作成日時 (created_at) が新しい順に、上から 3 人だけ取得せよ
-- （LIMIT を使う）
select id, name, email, age, country, created_at from users
order by created_at limit 3;
select id, name, email, age, country, created_at from users
order by created_at desc limit 3;