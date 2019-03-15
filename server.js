console.log("Building ng7 app --> Angular");

var express = require('express');
var bodyParser = require('body-parser');
var indexRouter = express.Router();

//var config =require("./config/config");

var app =express();

//require("./config/mongoose")(config);
console.log("Building ng7 app --> Angular --- 1");

//app.use(logger('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());

app.use(express.static(__dirname+'/dist/ng7'));

//require("./app/routes")(app);
/* indexRouter.get('/*',function(req,res){
    console.log("I am here!!!");
    //res.end("you will be getting back the angular single page app");
    res.sendFile(__dirname+'/dist/ng7/index.html');
}); */
app.use('/',indexRouter);   

var port =process.env.PORT || 3001;
app.listen(port,function(){
    console.log("server listening at : "+port);
})