const {Bookmark}  = require('../models')

module.exports = {
    async indexServer (req,res) {
        try{
            const {songId, userId} = req.query 

            const bookmark = await Bookmark.findOne({
                where: {
                    SongId: songId,
                    UserId: userId
                }
            })
            res.send(bookmark)
            console.log('Successfully fetch bookmark')
        }catch (err){
            res.status(500).send({
                error: "An error has occured trying to fetch the bookmark"
            })
        }
    },
    async postServer (req,res) {
        try{
            const bookmark = req.body

            await Bookmark.create(bookmark)
            res.send(bookmark)
            console.log('Successfully create bookmark')
        }catch (err){
            res.status(500).send({
                error: "An error has occured trying to create the bookmark"
            })
        }
    },
    async deleteServer (req,res) {
        try{
            const {bookmarkId} = req.params 
            const bookmark = await Bookmark.findByPk(bookmarkId)
            await bookmark.destroy()
            res.send(bookmark)
            console.log('Successfully delete bookmark')
        } catch (err) {
            res.status(500).send({
                error: "An error has occured trying to delete the bookmark"
            })
        }
    }   
}