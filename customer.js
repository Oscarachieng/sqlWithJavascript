//Requiring sqlite3
const sqlite3 = require('sqlite3').verbose();

// creating the Database and connection to the database
const database = new sqlite3.Database('./business.db',sqlite3.OPEN_READWRITE,(error) => {
  if (error) return console.error(error.message)
});

// Creating customers table
 const customersTable = `CREATE TABLE IF NOT EXISTS customers (
   customer_id INT NOT NULL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    phone VARCHAR(15),
    street_address VARCHAR(255),
    city VARCHAR(255),
    zip_code VARCHAR(5),
    referrer_id INT,
    FOREIGN KEY (referrer_id) REFERENCES customers (customer_id)
);
`
database.run(customersTable);
// Inserting Data into Customers Table
const customersData = `INSERT INTO customers VALUES 
('1', 'OSCAR', 'ACHIENG', '0799885744', 'ES200', 'NAIROBI', '00201', '1'),
('2', 'OSCAM', 'ACHILO', '0790805704', 'ES0', 'NAIROBI', '00291', '2'),
('3', 'ALLAN', 'ACHIENG', '0739685754', 'ES430', 'NANYUKI', '06201', '3'),
('4', 'ENOCK', 'SAMSON', '0129988574', 'ES05', 'NAROK', '00261', '2');`
database.run(customersData, (err) => {
  if(err) return console.error(err.message)
});