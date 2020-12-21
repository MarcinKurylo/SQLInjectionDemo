module.exports.regexhelper = (req, res, next) => {
    const re = new RegExp('^[a-z0-9]+$')
    const user = req.body.username
    if(!re.test(user)){
        return res.render('cheat')
    }
    next()
}