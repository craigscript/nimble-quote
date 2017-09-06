import * as express from "express";
import { Response, Request } from 'express';
import * as path from 'path';
import * as morgan from 'morgan';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as session from 'express-session';

import config from './config/config';
import configurePassport from './config/passport';
import { AuthRoute } from './routes/auth';
import { ApiRoute } from './routes/api';
import { Users } from './services/users-service';



const app = express();

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(session({
  secret: config.session.secret,
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false, // FIXME set to true when serving via https
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24
  }
}));

const passport = configurePassport(Users());

app.use(passport.initialize());
app.use(passport.session());

console.log(path.resolve(__dirname, '../../react-ui/build'));
app.use(express.static(path.resolve(__dirname, '../../react-ui/build')));

app.use(AuthRoute(passport));
app.use('/api', ApiRoute());

// All remaining requests return the React app, so it can handle routing.
app.get('*', function (request: Request, response: Response) {
  response.sendFile(path.resolve(__dirname, '../../react-ui/build', 'index.html'));
});

module.exports = app;