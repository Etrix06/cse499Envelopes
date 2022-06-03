const jwt = require('jsonwebtoken');
const User = require('../models/user');

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;

    //check if json web token exists
    if (token) {
        jwt.verify(token, 'striped tiger and fuzzy bunny is the jwt secret', (err, decodedToken) => {
            if (err) {
                console.log(err.message)
                res.redirect('/login');
            } else {
                console.log('this in is-auth requireAuth', decodedToken);
                next();
            }
        });
    } else {
        res.redirect('/login');
    }
}

//check current user
const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(token, 'striped tiger and fuzzy bunny is the jwt secret', async(err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.locals.user = null;
                next();
            } else {
                console.log('this in is-auth checkUser', decodedToken);
                let user = await User.findById(decodedToken.id);
                res.locals.user = user;
                next();
            }
        })
    } else {
        res.locals.user = null;
        next();
    }
};

module.exports = { requireAuth, checkUser };