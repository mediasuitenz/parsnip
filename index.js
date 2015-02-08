'use strict';


require('envoodoo')()

var hyperquest    = require('hyperquest')
var express       = require('express')
var JSONStream    = require('JSONStream')
var geojsonStream = require('geojson-stream')
var app           = express()

var urlTemplate = 'https://data.linz.govt.nz/services/query/v1/vector.json/' +
  '?v=1.2&key={key}&layer=772&x={x}&y={y}&radius=48&max_results=1&geometry=' +
  'true&with_field_names=true'
var key         = process.env.LINZ_API_KEY;

app.get('/:x/:y', function (req, res) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET')

  var url = urlTemplate
    .replace('{x}', req.params.x)
    .replace('{y}', req.params.y)
    .replace('{key}', key)

  hyperquest(url)
    .pipe(JSONStream.parse('vectorQuery.layers.772.features.*'))
    .pipe(geojsonStream.stringify())
    .pipe(res)
})

var port = process.env.PORT || 4000
console.log('app listening on port', port)
app.listen(port)
