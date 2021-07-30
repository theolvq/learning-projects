const express = require('express');
const path = require('path');
const app = express();

//set up static and middleware
//middleware = software that lies between an operating system and the applications running on it
//static = a file that doesn't need to be changed by the server
app.use(express.static('./public'));

//    adding to static assets
//    SSR = Server Side Rendenring
// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));

// });

app.all('*', (req, res) => {
  res.status(404).send('Error 404, the ressource was not found');
});

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
