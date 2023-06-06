import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as FacebookStrategy } from "passport-facebook";
import session from "express-session";
import { GoogleAuthDto } from "../dto/user/googleAuth.dto";
import express from "express";
import dotenv from "dotenv";
dotenv.config();

class PassportConfig {
  constructor() {
    passport.serializeUser((user: any, done) => {
      done(null, user.id);
    });
    passport.deserializeUser((user: any, done) => {
      done(null, user);
    });

    passport.use(
      "google",
      new GoogleStrategy(
        {
          clientID: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          callbackURL: `${process.env.SERVER_URL}/api/auth/google/callback`
        },
        (accessToken, refreshToken, profile, done) => {
          console.log("accessToken: ", accessToken, "refreshToken: ", refreshToken);

          const user: GoogleAuthDto = {
            id: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
            image: profile.photos[0].value,
            accessToken,
            refreshToken
          };

          done(null, user);
        }
      )
    );

    passport.use(
      "facebook",
      new FacebookStrategy(
        {
          clientID: process.env.FACEBOOK_APP_ID,
          clientSecret: process.env.FACEBOOK_APP_SECRET,
          callbackURL: `${process.env.SERVER_URL}/api/auth/facebook/callback`
        },
        (accessToken, refreshToken, profile, done) => {
          console.log("accessToken: ", accessToken, "refreshToken: ", refreshToken);

          const user: GoogleAuthDto = {
            id: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
            image: profile.photos[0].value,
            accessToken,
            refreshToken
          };

          done(null, user);
        }
      )
    );
  }

  initialize(app: express.Application) {
    app.use(this.useSessionMiddleware());
    app.use(this.useSession());
    app.use(passport.initialize());
    app.use(passport.session());
  }

  private useSession() {
    return passport.session();
  }

  private useSessionMiddleware() {
    return session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false
    });
  }

  authenticate(strategy: string, options: any) {
    return passport.authenticate(strategy, options);
  }
}

export const passportConfig = new PassportConfig();
const initializePassport = passportConfig.initialize.bind(passportConfig);
export default initializePassport;
