/**
 * Entry point for the Express server application.
 * Sets up middleware, routes, and starts the server.
 */

import express, { Express } from "express";
import session from "express-session";
import dotenv from "dotenv";
import homepageRouter from "./routes/homepage.routes";

dotenv.config();

const app: Express = express();
const port = 3001;

// Configure session options
const sessionOptions: session.SessionOptions = {
  secret: process.env.SESSION_SECRET!,
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false, // change to true in production w/ HTTPS
    sameSite: "lax",
  },
};
app.use(session(sessionOptions));

// Register routes
app.use("/", homepageRouter);

// Start the server
const dockerLocalhost = "0.0.0.0";
app.listen(port, dockerLocalhost, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
