DROP DATABASE IF EXISTS complete_menu;

CREATE DATABASE copmplete_menu;

USE complete_menu;

CREATE TABLE menu (
  id INT NOT NULL AUTO_INCREMENT,
  main_description VARCHAR(255),
  single_menu_item VARCHAR(255),
  price_per_guest INT
);

CREATE TABLE menu_items (
  id INT NOT NULL AUTO_INCREMENT,
  item_name VARCHAR(255),
  item_description VARCHAR(255),
  menu_item_id INT
  FOREIGN KEY menu_item_id (menu_item_id) REFERENCES menu (id)
);