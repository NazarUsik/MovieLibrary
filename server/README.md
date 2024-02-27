## Description

Service for Movie Library

## Installation

1. Setup [TMDB](https://www.themoviedb.org/) account.
    - Get **API key/access token**.
2. Fill `.env` with the correct values.
3. Run `npm install`
4. Run `npm start`

or

`docker run -p 3000:3000 --name server`

## Running the app

```bash
# development
$ npm start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
