import passport, { initialize } from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import dotenv from "dotenv";
import session from "express-session";
import { GoogleAuthDto } from "src/dto/user/googleAuth.dto";

dotenv.config();

class PassportConfig {
  constructor() {
    passport.serializeUser((user: any, done) => {
      done(null, user.id);
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
          const user : GoogleAuthDto = {
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

  initialize() {
    this.useSessionMiddleware();
    this.useSession();
    return passport.initialize();
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

  authenticate(strategy : string, options : any) {
    return passport.authenticate(strategy, options);
  }
}

export const passportConfig = new PassportConfig();
const initializePassport = passportConfig.initialize.bind(passportConfig);
export default initializePassport;
