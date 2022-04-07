const {ObjectId} = require("mongodb");
module.exports = function (app, commentsRepository) {
    app.post('/comments/:song_id', function (req, res) {
        if (req.session.user == null) {
            res.send('Usuario no identificado ');
        } else {
            let comment = {
                author: req.session.user,
                text: req.body.text,
                song_id: req.body.song_id
            }
            let songId = req.params.id;
            let filter = {_id: ObjectId(songId)};
            //que no se cree un documento nuevo, si no existe
            const options = {upsert: false}
            commentsRepository.insertComment(comment, function (commentId) {
                if (songId == null) {
                    res.send("Error al insertar el comentario");
                } else {
                    res.send("Agregada el comentario con ID:  " + commentId)
                }
            });
        }
    });
}