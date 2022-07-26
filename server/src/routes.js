const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')
const BookmarksController = require('./controllers/BookmarksController')
const HistoriesConstroller = require('./controllers/HistoriesController')

module.exports = (app) => {
    //user authentication
    app.post('/register',
        AuthenticationControllerPolicy.register,
        AuthenticationController.register
    )
    app.post('/login',
        AuthenticationController.login
    )
    
    //songs
    app.get('/songs',
        SongsController.indexServer
    )
    app.get('/songs/:songId',
        SongsController.showServer
    )
    app.post('/songs',
        SongsController.createServer
    )
    app.put('/songs/:songId',
        SongsController.putServer
    )

    //bookmarks associate
    app.get('/bookmarks',
        BookmarksController.indexServer
    )
    app.post('/bookmarks',
        BookmarksController.postServer
    )
    app.delete('/bookmarks/:bookmarkId',
        BookmarksController.deleteServer
    )

    // Histories
    app.get('/histories',
        HistoriesConstroller.indexServer
    )
    app.post('/histories',
        HistoriesConstroller.postServer
    )
}