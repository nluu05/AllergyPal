CREATE DATABASE IF NOT EXISTS allergydb;

USE allergydb;

CREATE TABLE profile (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    loggedin_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE allergen (
    id INT AUTO_INCREMENT PRIMARY KEY,
    allergen_name VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Join table for profiles to allergens
CREATE TABLE profile_allergens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    profile_id INT NOT NULL,
    allergen_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (profile_id) REFERENCES profile(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (allergen_id) REFERENCES allergen(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    UNIQUE (profile_id, allergen_id)  
);

CREATE TABLE previously_viewed_products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    profile_id INT NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    product_path VARCHAR(100) NOT NULL,
    viewed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (profile_id) REFERENCES profile(id)
)

-- If necessary:

-- CREATE TABLE product (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     product_name VARCHAR(150) NOT NULL,
--     description TEXT,
--     ingredients TEXT,
--     image_url VARCHAR(255),
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- -- Join table linking products and allergens 
-- CREATE TABLE product_allergens (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     product_id INT NOT NULL,
--     allergen_id INT NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     FOREIGN KEY (product_id) REFERENCES product(id)
--         ON DELETE CASCADE
--         ON UPDATE CASCADE,
--     FOREIGN KEY (allergen_id) REFERENCES allergen(id)
--         ON DELETE CASCADE
--         ON UPDATE CASCADE,
--     UNIQUE (product_id, allergen_id)
-- );


INSERT INTO allergen (allergen_name)
VALUES
('Peanuts'),
('Tree Nuts'),
('Dairy'),
('Eggs'),
('Fish'),
('Shellfish'),
('Wheat'),
('Soy'),
('Sesame'),
('Chocolate'),
('Sulfites');


-- Add queries for dummy data profile and maybe saved allergens 
-- 