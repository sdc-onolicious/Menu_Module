DROP TABLE IF EXISTS restruants CASCADE;
DROP TABLE IF EXISTS menu_items CASCADE;
DROP TABLE IF EXISTS related_restruants CASCADE;

CREATE TABLE restruants (
  id SERIAL,
  cusine VARCHAR(80) NOT NULL,
  location VARCHAR(80) NOT NULL,
  Avg_review INTEGER NOT NULL,
  image_path VARCHAR(80) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE menu_items (
  id BIGSERIAL,
  -- normalized restruant name
  dish VARCHAR(180) NOT NULL,
  dish_description VARCHAR(180) NOT NULL,  
  price INTEGER NOT NULL,
  menu_category VARCHAR(20) NOT NULL,
  restruant_id INTEGER REFERENCES restruants(id) ON DELETE CASCADE,
  PRIMARY KEY (id)
);

CREATE TABLE related_restruants (
  source_rest_id INTEGER REFERENCES restruants(id) ON DELETE CASCADE,
  related_rest_id INTEGER REFERENCES restruants(id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX restruant_name_index on restruants(restruant_name);
CREATE INDEX menu_items_rest_id_index on menu_items(restruant_id);




