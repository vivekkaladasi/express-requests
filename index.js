const express = require("express");
const app = express();
const port = 3000;
//import item ki router file
const item = require('./routes/item')

//load into app
app.use('/api' , item)
//->api /-> homepage

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

//request ki kahaniii

//get request
// app.get("/", (req, res) => {
//   // res.send("got a get request")
//   res.sendFile("./dummy.html", { root: __dirname });
// });

// app.post("/items", (req, res) => {
//   //res.send("got a post request")
//   res.json({ x: 1, y: 2, z: 3 });
// });

// app.put("   ", (req, res) => {
//   res.send("got a put request");
// });

// app.delete("/items/:id", (req, res) => {
//   res.send("got a delete request");
// });

// app.listen(port, () => {
//   console.log(`vivek app listening on port ${port}`);
// });
