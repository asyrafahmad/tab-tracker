const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')

module.exports = (app) => {
    app.post('/register',
        AuthenticationControllerPolicy.register,
        AuthenticationController.register
    )
    app.post('/login',
        AuthenticationController.login
    )
    
    app.get('/songs',
        SongsController.indexServer
    )
    app.get('/songs/:songId',
        SongsController.showServer
    )
    app.post('/songs',
        SongsController.createServer
    )
}