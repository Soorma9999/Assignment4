/**********************************************************************************
WEB700 – Assignment 04
I declare that this assignment is my own work in accordance with Seneca Academic Policy.
No part of this assignment has been copied manually or electronically from any other source
(including 3rd party web sites) or distributed to other students.
Name: surmeet singh
Student ID: 110922259
Date: March 4,2026
**********************************************************************************/

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Serve all files in public folder
app.use(express.static(path.join(__dirname, 'public')));

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});