const {Song}  = require('../models')

module.exports = {
    async indexServer (req,res) {
        try{
            const song = await Song.findAll({
                limit: 10
            })
            res.send(song)
            console.log('Successfully find songs')
        }catch (err){
            res.status(500).send({
                error: "An error has occured trying to fetch the songs"
            })
            
            console.log('failed')
        }
    },
    async showServer (req,res) {
        try{
            const song = await Song.findByPk(req.params.songId)
            res.send(song)
            console.log('Successfully find song ID')
        }catch (err){
            res.status(500).send({
                error: "An error has occured trying to fetch the songs based on ID"
            })
            console.log('failed')
        }
    },
    async createServer (req,res) {
        try{
            const song = await Song.create(req.body)
            // const songJSON = song.toJSON()                      // JSON format
            const songJSON = JSON.stringify(song)           // string format
            res.send(songJSON)
            console.log('Successfully create new song')
        }catch (err){
            res.status(500).send({
                error: "An error has occured trying to create the song"
            })
            
            console.log('failed')
        }
    }
    
}