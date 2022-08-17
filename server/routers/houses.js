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
router.get("/:id", (req, res) => {
    req.params.id
    res.send(`get house with ID ${req.params.id}`)
})

module.exports = router