const sqlite3 = require('sqlite3').verbose();

// creating the Database and connection to the database
const database = new sqlite3.Database('./business.db',sqlite3.OPEN_READWRITE,(error) => {
  if (error) return console.error(error.message)
});

 const ordersTable = `CREATE TABLE IF NOT EXISTS orders (
    order_id INT NOT NULL PRIMARY KEY,
    cake_id INT NOT NULL,
    customer_id INT,
    pickup_date DATE NOT NULL,
    FOREIGN KEY (cake_id) REFERENCES cakes (cake_id),
    FOREIGN KEY (customer_id) REFERENCES customers (customer_id)
);
`
database.run(ordersTable);
// Inserting Data into Customers Table
const ordersData = `INSERT INTO orders VALUES 
  ('5', '1', '2', '01/01/2019'),
  ('6', '1', '2', '01/03/2019'),
  ('7', '1', '2', '02/02/ 2019'),
  ('8', '1', '2', '02/20/ 2019');`
database.run(ordersData, (err) => {
  if(err) return console.error(err.message)
});