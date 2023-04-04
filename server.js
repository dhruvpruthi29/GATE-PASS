
const express = require('express');
const path = require('path');
const app = express()
app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
  const options = {
    root: path.join(__dirname)
};

const fileName = 'templates/index.html';
res.sendFile(fileName, options)

})

app.post('/verify', function (req, res) { 
  const h = {
    root: path.join(__dirname)
};
const i = 'templates/verify.html';
  res.sendFile(i, h)

})
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});