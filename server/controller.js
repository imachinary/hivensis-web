const express = require('express');
const mysql = require('mysql2');
const geoip = require('geoip-lite');

require('dotenv').config();
exports.waitingList = async (req, res) => {
  const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DBNAME
  });

  const { email, languageCode } = req.body;
  const ipAddress = req.ip;
  const geo = geoip.lookup(ipAddress);
  const country = geo ? geo.country : 'Unknown';

  const datetime = new Date().toISOString().slice(0, 19).replace('T', ' ');

  const data = {
    email: email,
    datetime: datetime,
    ip: ipAddress,
    country: country
  };

  // Insert data into 'waitinglist' table
  connection.query('INSERT INTO waitinglist SET ?', data, (error, results, fields) => {
    if (error) {
      console.error('Error occurred while inserting data:', error);
      res.sendStatus(500);
    } else {
      console.log('Data inserted successfully.');
      res.sendStatus(200);
    }
  });

  connection.end();

  return;
}
