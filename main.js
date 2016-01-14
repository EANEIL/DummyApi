
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

var goodorbad;

process.argv.forEach(function (val, index, array) {
  goodorbad = parseInt(val);
});

console.log(goodorbad);

server.get('/', restify.serveStatic({
  directory: './',
  default: 'index.html'
}));

server.post('/data-exchange/upload', function (req, res, next) {
  console.log('==> /data-exchange/upload/ ');

  if (goodorbad === 0) {
    res.send(dummyData.baddata);
  } else {
    res.send(dummyData.gooddata);
  }

  console.log('<== /data-exchange/upload/');

  return next();

});

server.post('/data-exchange/complete/:filekey/:usermail', function (req, res, next) {
  console.log(req.params);
  res.send(req.params);
  return next();
});

server.listen(8081, function () {
  if (goodorbad === 0) {
    console.log('Using bad data');
  } else {
    console.log('Using good data');
  }
  console.log('%s listening at %s', server.name, server.url);
});