const {User}  = require('../models')
const jwt = require('jsonwebtoken')             // js package from node module
const config = require ('../config/config')

function jwtSignUser (user) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })

    // return jwt.sign(user, config.authentication.jwtSecret)
}

module.exports = {
    async register (req,res) {
        try{
            const user = await User.create(req.body)
            const userJson = user.toJSON()                      // json format
            // const userJson = JSON.stringify(user)           // string format
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
            console.log('Successfully registered new user')
        }catch (err){
            res.status(400).send({
                error: 'This email account is already in use.'
            })

            console.log('failed')
        }
    },
    async login (req,res) {

        // console.log(req.body)
        try{
            const {email,password} = req.body
            const user = await User.findOne({
                where:{
                    email: email
                }
            })

            if (!user) {
                return res.status(403).send({
                    error: 'The login information was incorrect'
                })
            }

            // const isPasswordValid = await user.comparePassword(password)
            // console.log(isPasswordValid);

            // if (!isPasswordValid) {
            //     return res.status(403).send({
            //         error: 'The password information was incorrect'
            //     })
            // }

            const userJson = user.toJSON()                  // json format
            // const userJson = JSON.stringify(user)        // string format
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
            console.log('User succesfully logged in')
        }catch (err){
            res.status(500).send({
                error: 'An error has occured trying to log in '
            })
            console.log('User failed to logged in')
        }
    }
}