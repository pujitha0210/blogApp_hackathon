import mysql from 'mysql'

export const db =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"rootpassword",
    database:"blog"
})

  db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
  
    console.log('Connected to MySQL!');
    // Your application logic goes here
  });

