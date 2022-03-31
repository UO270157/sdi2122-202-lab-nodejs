module.exports = function (app) {
    app.get("/authors/filter/:kind", function (req, res) {
        let songs = [{
            "title":"Blank space",
            "price":"1.2",
            "kind":"pop"
        },{
            "title":"See you again",
            "price":"1.3",
            "kind":"pop"
        },{
            "title":"Uptown Funk",
            "price":"1.1",
            "kind":"rock"
        }];

        let response = {
            seller:'Tienda de canciones',
            songs:songs.filter(song => song.kind === req.params.kind)
        };
        res.render("shop.twig",response);
    });
}