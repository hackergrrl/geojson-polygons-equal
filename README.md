# geojson-polygons-equal

> Checks two GeoJSON Polygons or MultiPolygons for equality.

This includes detecting polygons whose coordinates are rotated left or right
differently.

## Usage

```js
var polyEqual = require('geojson-polygons-equal')

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

console.log(polyEqual(poly1, poly2))
```

outputs

```
true
```

## API

```js
var polyEquals = require('geojson-polygons-equal')
```

### polyEquals(poly1, poly2)

Compares the two GeoJSON objects `poly1` and `poly2`, which can be either
`Polygon` or `MultiPolygon` objects.


## Install

With [npm](https://npmjs.org/) installed, run

```
$ npm install geojson-polygons-equal
```

## License

ISC

