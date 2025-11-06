CREATE DATABASE IF NOT EXISTS allergydb;

USE allergydb;

CREATE TABLE profile (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    -- email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    loggedin_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE saved_allergens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    profile_id INT NOT NULL,
    allergen_name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (profile_id) REFERENCES profile(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- Add queries for dummy data profile and maybe saved allergens 
-- 