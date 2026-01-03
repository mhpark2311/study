-- データベースに問い合わせて、文字列 'HELLO SQLite' を
-- 返させる“テストSELECT”
SELECT 'HELLO SQLite'; 

CREATE TABLE users (
id INTEGER PRIMARY KEY AUTOINCREMENT, --整数の自動ID
name TEXT NOT NULL, --名前は空欄禁止
email TEXT UNIQUE NOT NULL, --メールは重複禁止＋必須
age INTEGER, --数値だが NULL OK（未登録可）
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP --作成日時を自動記録
);

INSERT INTO users (name, email, age) VALUES
('田中', 'tana@example.com', 28), 
('佐藤', 'sato@example.com', 33),
('鈴木', 'suzu@example.com', NULL);

--users テーブルを 存在する場合だけ削除。
--DROP TABLE IF EXISTS users; 