DROP TABLE books;
CREATE TABLE IF NOT EXISTS books(
  id SERIAL PRIMARY KEY,
  author VARCHAR(255),
  title VARCHAR(255),
  isbn VARCHAR(255),
  image_url VARCHAR(255),
  description TEXT,
  bookshelf  VARCHAR(255)
);

SELECT * FROM books;

