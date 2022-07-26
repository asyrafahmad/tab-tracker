const {History,Song,User}  = require('../models')
const _ = require('lodash')

module.exports = {
    async indexServer (req,res) {
        try{
            const {userId} = req.query

            const histories = await History.findAll({
                where: { 
                    UserId: userId
                },
                include: [
                    {
                        model: Song
                    }
                ] 
            }).map(history => history.toJSON())
              .map(history => _.extend(
                {}, 
                history.Song,
                history
               ))
            res.send(_.uniqBy(histories, history => history.Song.Id))
            console.log('Successfully fetch bookmark')
        }catch (err){
            res.status(500).send({
                error: "An error has occured trying to fetch the history"
            })
        }
    },
    async postServer (req,res) {
        try{
            const {songId, userId} = req.body
            
            const history = await History.create({
                SongId: songId,
                UserId: userId
            })
            
            res.send(history)
            console.log('Successfully create bookmark')
        }catch (err){
            res.status(500).send({
                error: "An error has occured trying to create the history object "
            })
        }
    }
}