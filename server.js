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
        res.json(articles);
    });
})
.post(function(req, res) {  // Post new article to the datbase
    var article = new Article();

    // Body parser lets us use the req.body
    article.title = req.body.title;
    article.summary = req.body.summary;
    article.date = req.body.date;
    article.thumbnail = req.body.thumbnail;
    article.tags = req.body.tags.split(',');
    article.article = req.body.article;

    article.save(function(err) {
        if (err) 
            res.send(err);
        res.json({ message: 'Article successfully added!' });
    });
});

router.route('/mvp_sensor_data')
.post(function(req, res) {
    // console.log(req.body);
    var mvp_data = new MVPData()

    // console.log('req.body.status ' + req.body.status)
    // console.log('req.body.comment ' + req.body.comment)
    // console.log('req.body.name ' + req.body.name)
    // console.log('req.body.timestamp ' + req.body.timestamp)
    // console.log('req.body.value ' + req.body.value)
    // console.log('req.body.attribute ' + req.body.attribute)

    mvp_data.status = req.body.status;
    mvp_data.comment = req.body.comment;
    mvp_data.name = req.body.name;
    mvp_data.timestamp = req.body.timestamp;
    mvp_data.value = req.body.value;
    mvp_data.attribute = req.body.attribute;

    // console.log('mvp_data.status ' + mvp_data.status)
    // console.log('mvp_data.comment ' + mvp_data.comment)
    // console.log('mvp_data.name ' + mvp_data.name)
    // console.log('mvp_data.timestamp ' + mvp_data.timestamp)
    // console.log('mvp_data.value ' + mvp_data.value)
    // console.log('mvp_data.attribute ' + mvp_data.attribute)

    // console.log('req.body ' + req.body);
    // console.log('mvp_data ' + mvp_data);

    mvp_data.save(function(err) {
        if (err)
            res.send(err);
        res.json({ message: 'New MVP Data entry added to colins-world database!' });
    })

    // res.json({ message: 'just testin yo' });
})
.get(function(req, res) {  // Retrieve mvp temp data
    const yesterday = new Date(new Date().getTime() - (24 * 60 * 60 * 1000));
    const yesterday_string = yesterday.toISOString();

    MVPData.find({  // Query that DB
        "timestamp" : {
                '$gte': yesterday_string
            },
            'attribute': {
                '$in': ['temperature', 'humidity']
            }
        },
        '-_id value timestamp attribute',
        function(err, mvp_data){
            if (err) 
                res.send(err);
            
            // Create 4 arrays:
            //  temp and it's corresponding times, humidity and it's times
            var temps = [];
            var temp_times = [];
            var humids = [];
            var humid_times = [];

            for (var i = 0; i < mvp_data.length; i++) {
                if (mvp_data[i]['attribute'] == 'temperature') {
                    temps.push(mvp_data[i]['value']);
                    temp_times.push(mvp_data[i]['timestamp']);
                } else {
                    humids.push(mvp_data[i]['value']);
                    humid_times.push(mvp_data[i]['timestamp']);
                }
            }

            // Return that json
            res.json({
                temps: temps,
                temp_times: temp_times,
                humids: humids,
                humid_times: humid_times
            });
        }
    );
});

// Use our api router configuration when we call /api
app.use('/api', router);

// When urls is preceded by /static serve files from build/static folder
app.use('/static', express.static(path.join(__dirname + '/build/static')));

// Dealing with client side routing
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Starts the server and listens for requests
app.listen(port, function() {
    console.log(`api running on port ${port}`);
});
