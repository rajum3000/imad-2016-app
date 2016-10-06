var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one' : {
    title: 'Article one | Raju M',
    heading: "Article One",
    time: "Sep 5, 2016",
    content: `
        <p>
                This is the content for my first article.This is the content for my first article.This is the content for my first article. This is the content for my first article.This is the content for my first article.This is the content for my first article.
        </p>
        <p>
                 This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
        </p>
        <p>
                 This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
        </p>
            `
    }, 
    'article-two' : {
        title: 'Article Two | Raju M',
        heading: "Article Two",
        time: "Sep 5, 2016",
        content: `
        <p>
                This is the content for my second article.This is the content for my second article.This is the content for my second article. 
        </p>
        <p>
                 This is the content for my second article.This is the content for my second article.This is the content for my second article.
        </p>
        <p>
                 This is the content for my second article.This is the content for my second article.This is the content for my second article.
        </p>
            `
    },
    'article-three' : {
        title: 'Article Three | Raju M',
        heading: "Article Three",
        time: "Sep 5, 2016",
        content: `
        <p>
                This is the content for my third article.This is the content for my third article.This is the content for my third article. 
        </p>
        <p>
                 This is the content for my third article.This is the content for my third article.This is the content for my third article.
        </p>
        <p>
                 This is the content for my third article.This is the content for my third article.This is the content for my third article.
        </p>
            `
    },
};

function createtemplate(data)
{
var title = data.title;
var time = data.time;
var heading = data.heading;
var content = data.content;
var htmltemplate = 
    `
    <html>
    <head>
        <title>
           ${title}
        </title>
        <meta name="viewport" content="width-device-width, initial-scale 1" />
        <link href="/ui/style.css" rel="stylesheet" />
     </head>
    <body>
        <div class="container">
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
                ${time}
            </div>
            <div>
               ${content}
            </div>
        </div>
    </body>
</html>
    `;
    return htmltemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articlename', function (req, res) {
    var articlename = req.parms.articlename;
  res.send(createtemplate(articles[articlename]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
