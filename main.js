
var restify = require('restify');
var fs = require('fs');
var formidable = require('formidable');
var fse = require('fs-extra');
var dummyData = require('./data');

var destDir = '../../data-returns-frontend/uploads/uploaded/';
var server = restify.createServer({
  name: 'DummyAPI',
  version: '1.0.0'
});

/*server.use(restify.acceptParser(server.acceptable));
 server.use(restify.queryParser());
 server.use(restify.fullResponse());
 server.use(restify.bodyParser());
 server.use(restify.CORS());
 server.use(restify.jsonp());*/




server.get('/', restify.serveStatic({
  directory: './',
  default: 'index.html'
}));



server.post('/data-exchange/upload', function (req, res, next) {
  console.log('==> /data-exchange/upload/ ');

  /* var form = new formidable.IncomingForm();
   
   form.parse(req, function (err, fields, files) {
   
   var ftc = files.fileUpload.path;
   var sftc = ftc.split('/');
   
   var destFile = sftc[sftc.length - 1];
   
   fse.copy(ftc, destDir + destFile + '.csv', function (err) {
   if (err) {
   console.error(err);
   }
   
   
   });
   
   });*/

  //res.writeHead(200, {'content-type': 'application/json'});
  //res.write('Received upload: <a href="/view">View PDF</a>');
   //res.send(dummyData.baddata);
  res.send(dummyData.gooddata);

  console.log('<== /data-exchange/upload/');

  return next();

});

server.post('/data-exchange/complete/:filekey/:usermail', function (req, res, next) {
  console.log(req.params);
  res.send(req.params);
  return next();
});

server.listen(8081, function () {
  console.log('%s listening at %s', server.name, server.url);
});