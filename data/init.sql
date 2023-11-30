
CREATE DATABASE IF NOT EXISTS gradeDB;

USE gradeDB;

CREATE TABLE users (
    user_id INT PRIMARY KEY,
    user_firstName VARCHAR(50),
    user_lastName VARCHAR(50)
);

CREATE TABLE categories (
    category_id INT PRIMARY KEY,
    category_name VARCHAR(50)
);

CREATE TABLE branches (
    branch_id INT PRIMARY KEY,
    branch_name VARCHAR(50)
);

CREATE TABLE grades (
    grade_id INT PRIMARY KEY,
    user_id INT,
    category_id INT,
    branch_id INT,
    grade FLOAT,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (category_id) REFERENCES categories(category_id),
    FOREIGN KEY (branch_id) REFERENCES branches(branch_id)
);

-- Users
INSERT INTO users VALUES (1, 'John', 'Doe');
INSERT INTO users VALUES (2, 'Jane', 'Smith');

-- Categories
INSERT INTO categories VALUES (1, 'matu');
INSERT INTO categories VALUES (2, 'epsic');
INSERT INTO categories VALUES (3, 'CIE');

-- Branches
INSERT INTO branches VALUES (1, 'Branch1');
INSERT INTO branches VALUES (2, 'Branch2');
INSERT INTO branches VALUES (3, 'Branch3');

-- grades
INSERT INTO grades VALUES (1, 1, 1, 1, 18.5);
INSERT INTO grades VALUES (2, 1, 2, 2, 15.0);
INSERT INTO grades VALUES (3, 2, 3, 3, 20.0);

-- Ajout d'utilisateurs
INSERT INTO users VALUES (3, 'Alice', 'Johnson');
INSERT INTO users VALUES (4, 'Bob', 'Williams');

-- Ajout de catégories
INSERT INTO categories VALUES (4, 'physics');
INSERT INTO categories VALUES (5, 'chemistry');

-- Ajout de branches
INSERT INTO branches VALUES (4, 'Branch4');
INSERT INTO branches VALUES (5, 'Branch5');

-- Ajout de notes (grades) supplémentaires
INSERT INTO grades VALUES (4, 3, 4, 4, 22.0);
INSERT INTO grades VALUES (5, 4, 5, 5, 17.5);

-- Ajout de notes (grades) supplémentaires
INSERT INTO grades VALUES (6, 1, 1, 1, 17.0);
INSERT INTO grades VALUES (7, 1, 2, 2, 16.5);
INSERT INTO grades VALUES (8, 2, 3, 3, 18.0);
INSERT INTO grades VALUES (9, 3, 4, 4, 19.5);
INSERT INTO grades VALUES (10, 4, 5, 5, 15.0);

-- Ajout de notes (grades) supplémentaires
INSERT INTO grades VALUES (11, 2, 1, 1, 16.0);
INSERT INTO grades VALUES (12, 3, 2, 2, 19.0);
INSERT INTO grades VALUES (13, 4, 3, 3, 17.5);
INSERT INTO grades VALUES (14, 1, 4, 4, 20.0);
INSERT INTO grades VALUES (15, 2, 5, 5, 15.5);



