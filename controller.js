var express = require("express");
var router = express.Router();
var axios = require("axios");

router.get("/:city/:state/:pricingInfo", function(req, res) {
  axios({
    method: "get",
    url: `https://api.yelp.com/v3/businesses/search?location=${
      req.params.city
    }${req.params.state}&price=${req.params.pricingInfo}`,
    headers: {
      Authorization:
        "Bearer iAZg8D2K9qzHWdA8Q9Y5YyWvfNepmfic8F_XNgqjxvOEXU-VLFq_AdPSbaM1MuzCOENtfCqgmZztVLoffJx2q2O7lQ33LQU9lbNT8SHAudhztWodF-Le-jZgNhvkXHYx",
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
