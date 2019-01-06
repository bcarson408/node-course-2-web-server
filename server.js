const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear',() => {
  new Date().getFullYear();
})

app.get('/',(request,res) => {
  // res.send('Hello Express');
  res.render('home.hbs',{
     pageTitle:'Home Page'  ,
     welcomeMessage:'Welcome',
  });
});

app.get('/about',(req,res) => {
  res.render('about.hbs',{
     pageTitle:'About Page'  ,
  });
});


app.get('/bad',(req,res) => {
  res.send({
      error:'404',
      message:'Bad'
    }
  );
});
app.listen(3000,() => {
  console.log("Node Server is up on 3000");
});
