const sqlite3 = require('sqlite3').verbose();

// creating the Database and connection to the database
const database = new sqlite3.Database('./business.db',sqlite3.OPEN_READWRITE,(error) => {
  if (error) return console.error(error.message)
});

// Creating cakes table
 const cakesTable = `CREATE TABLE IF NOT EXISTS cakes (
    cake_id INT NOT NULL PRIMARY KEY,
    flavor VARCHAR(100) NOT NULL
);`
database.run(cakesTable);

// Inserting data into cakes Table

const cakesData = `INSERT INTO cakes VALUES 
  ('1', 'sugary'),
  ('2', 'Sugary'),
  ('3', 'Milky');`
database.run(cakesData, (err) => {
  if(err) return console.error(err.message)
});

// querying the cakes table
const cakes = `SELECT * FROM cakes`;
database.all(cakes, (err, rows) => {
  if(err) return console.error(err.message);
  rows.forEach((row) => console.log(row))
})





