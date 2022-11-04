const router = require('express').Router();
const cheerio = require("cheerio");


router.get('/', async (req, res) => {

    // scrape and send data to index


 res.render("index", {})
})

module.exports = router;
