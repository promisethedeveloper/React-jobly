# Jobly

## Overview

**LIVE LINK **: https://aboriginal-silver.surge.sh/

This is a full stack database-driven web application that I built to explore and apply for jobs online (no, these won't be REAL jobs). It has similar functionality to LinkedIn but on a smaller scale.

<img src="https://promisemorka.com/assets/png/jobly.png" width="100%"/>

## Features

- Ability to sign up and log in
- Functionality for searching and applying for jobs from the list of jobs provided by the backend
- Limitless number of jobs can be applied for by Users

## Technologies used

- React
- Node
- Express
- PostgreSQL

## Dependencies

- [bootstrap](https://getbootstrap.com/)
- [Jsonschema](https://json-schema.org/understanding-json-schema/)
- [jsonwebtoken](https://jwt.io/)
- [axios](https://axios-http.com/docs/intro)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [morgan](https://www.npmjs.com/package/morgan)
- [pg](https://www.npmjs.com/package/pg)


## API

- [Jobly API](https://reactjobly-backend.herokuapp.com/)

## Deployment

- Backend and Frontend: heroku

## Database schema

- A postgreSQL database is used to implement the database schema. The database schema is made up of 4 tables: users, companies, jobs, and applications.
- There is a many-to-many relationship between users and jobs tables, and the applications table is the <em>joining table</em> that makes the implementation possible

## Getting started

- Clone this repository with `git clone https://github.com/promisethedeveloper/React-jobly`
- Run `cd jobly-backend` and run `npm install` to install all backend dependencies
- Run `npm start` to start the backend
- Run `cd..`
- Run `cd jobly-frontend` and run `npm install` to install the frontend dependencies
- Run `npm start` to start the frontend
  Once you have completed the steps above, you will have a ready-to-go copy of Jobly on your local machine.
  
  ## Backend testing with jest

- Navigate to `React-jobly/jobly-backend`
- Run in terminal:
  `npm run test`
  
  ## Frontend testing with react testing library

- Navigate to `React-jobly/jobly-frontend`
- Run in terminal:
  `npm run test`
