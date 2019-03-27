// imports express
const express = require('express')

// makes an express app
const app = express();

let Parser = require('rss-parser');
let parser = new Parser();

// if we ever access url /, return something (return it in res.send)
app.get('/rachel', (req, res) => {
  res.send('Loves Alex!')
});


app.get('/', (req, res) => {
  (async () => { // async just means run the following code asynchronously

    // get the feed out
    let feed = await parser.parseURL('https://news.google.com/rss/search?q=astronomy&hl=en-US&gl=US&ceid=US:en');

    // print the feed title
    console.log(feed.title);

    // for item in feed : print (item.title and item.link)


    // feed.items.forEach(item => {
    //   console.log(item.title + ':' + item.link)
    // });

    // firstItem =

    // const firstItem = something
    // let firstItem = something

    let firstItem = feed.items[0] // something
    console.log(firstItem)
    res.send(firstItem)
    // res.send(firstItem.)

  })();
  // res.send('Hello World!')
});




// listen on the port 8000 of server
app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});
