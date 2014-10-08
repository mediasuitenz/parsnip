Parsnip
=======

## Description

Provides an API that takes a lat lng and returns the nearest land parcel in
NZ in geojson format.

## Usage

`http://parsnip.msapp.co.nz/{lng}/{lat}`

example:
```
curl http://parsnip.msapp.co.nz/172.41119384765625/-43.55651037504759
```

## Installation

### Local setup

- clone repo
- npm install
- cp .env-example -> .env and edit values as necessary
- npm start

### Setup on dokku-alt

- clone repo
- git remote add dokku dokku@msapp.co.nz:parsnip
- git push dokku master
- ssh dokku@msapp.co.nz config:set parsnip LINZ_API_KEY='[some key from linz]'
