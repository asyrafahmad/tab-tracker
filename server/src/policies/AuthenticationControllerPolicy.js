const Joi = require('joi')

module.exports = {
    register (req, res, next) {

        const schema = Joi.object({
            email : Joi.string().email(),                       // email validation
            password: Joi.string().regex(                       // password validation
                new RegExp('^[a-zA-Z0-9]{8,32}$')               // must be have UpperCase, LowerCase, Number (between 8 to 32 characters)
            )
        })

        // const {error, value} = Joi.validate(req.body, schema)                   // old version
        const {error, value} = schema.validate(req.body)                     // new version

        if(error) {
            switch(error.details[0].context.key) {
                case 'email' : 
                    res.status(400).send({
                        error_message: error.details[0].message,
                        error_explaination: 'You must provide a valid email address'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: error,
                        error_message: error.details[0].message,
                        error_explaination: `The password provided failed to match the following rules: <br> 1. It must contain ONLY the following characters: lower case, upper case, numerics <br> 2. It must be at least 8 characters in length and not greater than 32 characters`
                    })
                    break
                default: 
                    req.status(400).send({
                        error_explaination: 'Invalid registration information'
                    })
            }
        }else{
            next()
        }

    }
}