'use strict'

//first we import our dependencies…
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Article = require('./src/models/ArticleModel')

//and create our instances
var app = express();
var router = express.Router();

//set our port to either a predetermined port number if you have set 
//it up, or 3001
var port = process.env.API_PORT || 3001;

//fix (node:5232) DeprecationWarning: Mongoose: mpromise is deprecated warning
mongoose.Promise = global.Promise;

//db config
mongoose.connect('mongodb://colin:password@ds133657.mlab.com:33657/colins_world', {
    useMongoClient: true,
})

//now we should configure the API to use bodyParser and look for 
//JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//To prevent errors from Cross Origin Resource Sharing, we will set 
//our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

//and remove cacheing so we get the most recent comments
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

//now we can set the route path & initialize the API
router.get('/', function(req, res) {
    res.json({ message: 'API Initialized!'});
});

//adding the /articles route to our /api router 
router.route('/articles')
//retrieve all articles from the database
.get(function(req, res) {
    //looks at our article Schema
    Article.find(function(err, articles) {
        if (err)
            res.send(err);

        //responds with a json object of our database articles.
        res.json(articles)
    });
})
//post new article to the datbase
.post(function(req, res) {
    var article = new Article();

    //body parser lets us use the req.body
    article.title = req.body.title,
    article.summary = req.body.summary,
    article.date = req.body.date,
    article.thumbnail = req.body.thumbnail,
    article.tags = req.body.tags.split(','),
    article.article = req.body.article

    article.save(function(err) {
        if (err) 
            res.send(err);
        res.json({ message: 'Article successfully added!' });
    });
});

//Use our router configuration when we call /api
app.use('/api', router);

//starts the server and listens for requests
app.listen(port, function() {
    console.log(`api running on port ${port}`);
});