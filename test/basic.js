var test = require('tape')
var polyEqual = require('../')

test('exact', function (t) {
  var poly = {
    type: 'Polygon',
    coordinates: [
      [
        [0, 0],
        [0, 1],
        [1, 1],
        [1, 0],
        [0, 0]
      ]
    ]
  }

  t.ok(polyEqual(poly, poly))

  t.end()
})

test('bad', function (t) {
  var poly = {
    type: 'Polygon',
    coordinates: [
      [
        [0, 0],
        [0, 1],
        [1, 1],
        [1, 0],
        [0, 0]
      ]
    ]
  }

  var other = {
    type: 'Polygon',
    coordinates: [
      [
        [0, 0],
        [0, 1],
        [1, 0],
        [1, 1],
        [0, 0]
      ]
    ]
  }

  t.notOk(polyEqual(poly, other))

  t.end()
})

test('linear ring rotated', function (t) {
  var poly1 = {
    type: 'Polygon',
    coordinates: [
      [
        [0, 0],
        [0, 1],
        [1, 1],
        [1, 0],
        [0, 0]
      ]
    ]
  }

  var poly2 = {
    type: 'Polygon',
    coordinates: [
      [
        [1, 1],
        [1, 0],
        [0, 0],
        [0, 1],
        [1, 1]
      ]
    ]
  }

  t.ok(polyEqual(poly1, poly2))

  t.end()
})

test('multipolygon', function (t) {
  var poly1 = {
    type: 'Polygon',
    coordinates: [
      [
        [0, 0],
        [0, 1],
        [1, 1],
        [1, 0],
        [0, 0]
      ]
    ]
  }

  var poly2 = {
    type: 'Polygon',
    coordinates: [
      [
        [1, 1],
        [1, 0],
        [0, 0],
        [0, 1],
        [1, 1]
      ]
    ]
  }

  var multi1 = {
    type: 'MultiPolygon',
    coordinates: [
      poly1.coordinates,
      poly2.coordinates
    ]
  }

  var multi2 = {
    type: 'MultiPolygon',
    coordinates: [
      poly2.coordinates,
      poly1.coordinates
    ]
  }

  t.ok(polyEqual(multi1, multi2))

  t.end()
})

