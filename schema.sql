-- run mysql -u root -p < schema.sql to create Database and tables
DROP DATABASE IF EXISTS complete_menu;

CREATE DATABASE complete_menu;

USE complete_menu;

CREATE TABLE menu (
  id INT NOT NULL AUTO_INCREMENT,
  main_description VARCHAR(255),
  single_menu_item VARCHAR(255),
  price_per_guest INT,
  PRIMARY KEY (id)
);

CREATE TABLE menu_items (
  id INT NOT NULL AUTO_INCREMENT,
  item_name VARCHAR(255),
  item_description VARCHAR(255),
  menu_item_id INT,
  FOREIGN KEY (menu_item_id) REFERENCES menu (id),
  PRIMARY KEY (id)
);

INSERT INTO menu (main_description, single_menu_item, price_per_guest) VALUES ('Test D', 'Test menu', 100);
INSERT INTO menu_items (item_name, item_description, menu_item_id) VALUES ('little Test D', 'little Test menu', 1);
