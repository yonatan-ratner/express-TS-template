import "express-session";

declare module "express-session" {
  // extends 'express-session' types/interfaces without needing to import this file!
  interface SessionData {
    uuid?: string;
  }
}
