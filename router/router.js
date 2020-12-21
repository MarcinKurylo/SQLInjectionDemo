const express = require('express')
const router = express.Router()
const connection = require('../connection/connection.js') // connection with DB
const {regexhelper }= require('../middleware.js')

router.route('/')
    .get((req, res) => {
        res.render('home')
    })
// regexhelper is a middleware protecting from attack, in order to show attack possibilieties - delete it from .post method
router.route('/secret')
    .post(regexhelper, (req, res) => {
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