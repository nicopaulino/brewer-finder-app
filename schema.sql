DROP TABLE IF EXISTS breweries;

CREATE TABLE breweries (
  id serial PRIMARY KEY,
  name VARCHAR (50) UNIQUE NOT NULL,
  type VARCHAR (50) NOT NULL,
  street VARCHAR (50) NOT NULL,
  city VARCHAR (50) NOT NULL,
  zipcode VARCHAR (50) NOT NULL,
  state VARCHAR (50) NOT NULL,
  lat VARCHAR (50) NOT NULL,
  lng VARCHAR (50) NOT NULL,
  link VARCHAR (50) NOT NULL
);

insert into breweries set id = "1", name = 'Brieux Carre Brewing Company', type = 'micro', street = '2115 Decatur St', city = 'New Orleans', zipcode = '70116', state = 'Louisiana', lat = '29.9627851', lng = '-90.0572496', link = 'http://www.brieuxcarre.com';
