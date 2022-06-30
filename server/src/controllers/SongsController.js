const {Song}  = require('../models')

module.exports = {
    async index (req,res) {
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
    async show (req,res) {
        try{
            const song = await Song.findByID(req.params.id)
            res.send(song)
            console.log('Successfully find song ID')
        }catch (err){
            res.status(500).send({
                error: "An error has occured trying to fetch the songs"
            })
            
            console.log('failed')
        }
    },
    async create (req,res) {
        try{
            const song = await Song.create(req.body)
            res.send(song)
            console.log('Successfully create new song')
        }catch (err){
            res.status(500).send({
                error: "An error has occured trying to create the song"
            })
            
            console.log('failed')
        }
    }
    
}