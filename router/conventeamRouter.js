const express = require("express");
const router = express.Router()

router.post('/convemteam', (req, res) => {
  const userResponse = req.body.userResponse.toUpperCase();
  console.log(req.body)
  //Api Response
  if (userResponse === "SIM") {
    res.status(200).json({ msg: 'Success' });
  } else {
    res.status(400).json({ msg: 'Error' });
  }
});


module.exports = router;