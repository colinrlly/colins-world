'use strict'

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const Article = require('./src/models/ArticleModel')
const MVPData = require('./src/models/MVPDataModel')

var app = express();
var router = express.Router();

var port = process.env.PORT || 3001;

// Fix (node:5232) DeprecationWarning: Mongoose: mpromise is deprecated warning
mongoose.Promise = global.Promise;

// DB config
mongoose.connect('mongodb://colin:password@ds133657.mlab.com:33657/colins_world', {
    useMongoClient: true,
});

// Now we should configure the API to use bodyParser and look for 
// JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// To prevent errors from Cross Origin Resource Sharing, we will set 
// our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

// And remove cacheing so we get the most recent comments
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

// Now we can set the route path & initialize the API
router.get('/', function(req, res) {
    res.json({ message: 'API Initialized!'});
});

// Adding the /articles route to our /api router 
router.route('/articles')
.get(function(req, res) {  // Retrieve all articles from the database
    // Looks at our article Schema
    Article.find(function(err, articles) {
        if (err)
            res.send(err);

        // Responds with a json object of our database articles.
        console.log(articles);
        res.json(articles);
    });
})
.post(function(req, res) {  // Post new article to the datbase
    var article = new Article();

    // Body parser lets us use the req.body
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

// Use our api router configuration when we call /api
app.use('/api', router);

// When urls is preceded by /static serve files from build/static folder
app.use('/static', express.static(path.join(__dirname + '/build/static')));

// Route for logging MVP data
app.post('/mvp_sensor_data', function(req, res) {
    console.log(req.body);
    var mpv_data = new MVPData()

    mvp_data.status = req.body.status
    mvp_data.comment = req.body.comment
    mvp_data.name = req.body.name
    mvp_data.timestamp = req.body.timestamp
    mvp_data.value = req.body.value
    mvp_data.attribute = req.body.attribute

    mvp_data.save(function(err) {
        if (err)
            res.send(err);
        res.json({ message: 'New MVP Data entry added to colins-world database!' });
    })
    
    res.sendStatus(200);
})

// Dealing with client side routing
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Starts the server and listens for requests
app.listen(port, function() {
    console.log(`api running on port ${port}`);
});