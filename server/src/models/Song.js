module.exports = (sequelize, Datatypes) => {
    const Song = sequelize.define('Song', {
        title: Datatypes.STRING,
        artist: Datatypes.STRING,
        genre: Datatypes.STRING,
        album: Datatypes.STRING,
        albumImageUrl: Datatypes.STRING,
        youtubeId: Datatypes.STRING,
        lyrics: Datatypes.TEXT,
        tab: Datatypes.TEXT,
    })

    return Song
}
