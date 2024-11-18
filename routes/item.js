// ye file saare item specific routes ko store karegi
const express = require('express')
const router = express.Router()

// define the home page route

router.get("/", (req, res) => {
    // res.send("got a get request")
    res.sendFile("./dummy.html", { root: __dirname });
  });
  
  router.post("/items", (req, res) => {
    //res.send("got a post request")
    res.json({ x: 1, y: 2, z: 3 });
  });
  
  router.put("/items/:id", (req, res) => {
    res.send("got a put request");
  });
  
  router.delete("/items/:id", (req, res) => {
    res.send("got a delete request");
  });
  
  router.listen(port, () => {
    console.log(`vivek app listening on port ${port}`);
  });

module.exports = router