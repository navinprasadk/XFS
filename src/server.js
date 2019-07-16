const express = require('express');
// const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, '../build/public')));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../build/public', 'index.html'));
});

app.listen(process.env.PORT || 8080);

// create server
//app.listen(port, () => console.log(`Listening on port ${port}`));