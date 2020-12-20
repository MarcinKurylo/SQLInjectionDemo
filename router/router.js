const express = require('express')
const router = express.Router()
const connection = require('../connection/connection.js') // connection with DB

router.route('/')
    .get((req, res) => {
        res.render('home')
    })
router.route('/secret')
    .post((req, res) => {
        const user = req.body.username
        const pass = req.body.password
        const q = `SELECT username, password FROM users WHERE username="${user}";`
        connection.query(q, (err, results) =>{
            if (err) throw err
            if (results.length > 0){
                if (pass===results[0].password){
                    res.render('secret', {username:results[0].username})
                    return
                }
                res.redirect('/')
                return
            }
            res.redirect('/')
            return
        })
    })
module.exports = router
