# Project Wayfarer

Wayfarer project is a TripAdvisor style application for people to post their trip memories for vacations they enjoyed. 

## Technologies Used

* HTML5, CSS, JavaScript
* ReactJS
* Bootstrap 4.0
* NodeJS
* MongoDB
* MongooseJS
* ExpressJS

## Modules

The project folders include:

* controllers: expressJS code for API
* models: mongoose schema
* public: css, js and images
* views: the index.html file that user gets in browser
* documentation: Wireframes, ERD-Diagram

The project starts using `server.js` file that runs the
server at port `http://localhost:3000`.

## Existing Features

* A nice landing page with carousel
* Authentication
* Create new posts
* View existing posts
* View all posts made by a user
* Delete their own post - post confirmation
* Edit their own post

## References

* Initial site template used from Bootstrap cover page
example: http://getbootstrap.com/docs/4.1/examples/cover/


## Database

The database used is MongoDB. Data is stored in the following collections:

* user: contains details on each user
* post: contains details on each post
* cities: contains data for each city

There is no referencing on Mongoose layer by default. In fact we use the
support of MongoDB queries to make sure that we fetch the right data that
we need every time.

Server side validations for fields have been added to make sure that incorrect
requests from clients are not honored.

## Challenges/Learnings/Wins

* Modal Windows - using BS modal windows was a challenge as the BS javascript
conflicted with our React code. Thus had to create one.

* Local Storage - using local storage to persist user session after sign-in
and reloading that data once the app was loaded

* Carousel - making sure images displayed nicely in full-width and preventing
memory leak

## Planned Features

* UI for CRUD operations of cities
* Store passwords using BCrypt

## License

Copyright (C) 2018, Niti Singhal.
