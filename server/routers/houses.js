const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.send('houses List')
})
router.get('/new', (req, res) => {
    res.send('new house Form')
})
router.post('/', (req, res) => {
    res.send('create house')
})
//kompliziert:
// router.get("/:houseId", (req, res) => {
//     res.send(`get house with ID ${req.params.houseId}`) //still works lol
// })
// router.put("/:houseId", (req, res) => {
//     res.send(`put house with ID ${req.params.houseId}`)
// })
// router.delete("/:houseId", (req, res) => {
//     res.send(`delete house with ID ${req.params.houseId}`)
// })
// geht einfacher unten mit router.route:
router.route("/:houseId")
    .get((req, res) => {
        console.log(req.user)
        res.send(`get house with ID ${req.params.houseId}, user: ${req.user}`)
    })
    .put( (req, res) => {
        res.send(`put house with ID ${req.params.houseId}`)
    })
    .delete((req, res) => {
        res.send(`delete house with ID ${req.params.houseId}`)
    })
//
const users = [{name:"Peter"}, {name: "Sarah"}]
router.param("houseId", (req, res, next, houseId) => {
    //whenever an url with that dynamic parameter (houseId) is called
    console.log(houseId) //runs this code indefinitely until 'next' function is called
    // aka MIDDLEWARE - runs between the request to server and the actual response being sent
    // this concept allows us to load e.g. variables and then let them be processed by backend:
    req.user = users[houseId]
    next() // allows to run the next functions now, aka get, put, delete etc.
})

module.exports = router