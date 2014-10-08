Parsnip
=======

## Description

Provides an API that takes a lat lng and returns the nearest land parcel in
NZ in geojson format.

## Usage

`http://{url}/{lng}/{lat}`

example:
```
curl http://myparsnipapp.com/172.41119384765625/-43.55651037504759
```

## Installation

### Local setup

- clone repo
- npm install
- cp .env-example -> .env and edit values as necessary
- npm start

### Setup on heroku

- clone repo
- git remote add heroku [heroku app git url]
- git push heroku master
- heroku config:set LINZ_API_KEY='[some key from linz]'
