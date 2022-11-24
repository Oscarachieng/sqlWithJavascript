const sqlite3 = require('sqlite3').verbose();

// creating the Database and connection to the database
const database = new sqlite3.Database('./business.db',sqlite3.OPEN_READWRITE,(error) => {
  if (error) return console.error(error.message)
});

//Gets all cakes
const cakes = `SELECT * FROM cakes`;
database.all(cakes, (err, rows) => {
  if(err) return console.error(err.message);
  rows.forEach((row) => console.log(row))
});
// Gets all customers
const customers = `SELECT * FROM customers`;
database.all(customers, (err, rows) => {
  if(err) return console.error(err.message);
  rows.forEach((row) => console.log(row))
})

//Gets the Needed Orders Data with Customer names
const orders = `SELECT DISTINCT orders.order_id, orders.cake_id, orders.pickup_date,
customers.first_name, customers.last_name, customers.city, customers.street_address
FROM orders, customers
WHERE orders.pickup_date BETWEEN '01/01/2019' AND '02/31/2019';`

database.all(orders, (err, rows) => {
  if(err) return console.error(err.message);
  rows.forEach((row) => console.log(row))
})