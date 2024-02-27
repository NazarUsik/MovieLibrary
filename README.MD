# [Movie Library Documentation](docs/Movie_Library_Documentation.pdf)

## Introduction

This is some kind of streaming platform designed to deliver an entertainment to users.
At its core, it combines a React-based frontend with a Node.js backend powered by Nest.js. The frontend offers an
intuitive and dynamic interface, enabling seamless navigation through a vast library of movies and series.
On the backend, Nest.js efficiently manages data and facilitates communication with
the [TMDB](https://www.themoviedb.org/) API, enriching the platform with a wealth of movie and series information.

At the moment, a simple server wrapper has been implemented over the [TMDB](https://www.themoviedb.org/) API.
As well a simple frontend implementation.

For future development, please look at [the detailed documentation](docs/Movie_Library_Documentation.pdf).

It will be necessary to implement an independent backend (in the form of several microservices) and as well as several
frontend applications (such as displaying content for users, content management, and displaying statistics)

---

## Architecture

### Technology Stack

#### Client

- React
- React Router DOM
- React Icons
- Styled Components

#### Server

- Nest Js
- Eslint, Prettier

### Installation

First, check the [client/README.md](client/README.md) and [server/README.md](server/README.md)

And next:

`docker-compose up`
