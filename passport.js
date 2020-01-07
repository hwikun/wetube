import passport from "passport";
import GithubStrategy from "passport-github";
import LineStrategy from "passport-line-auth";
import User from "./models/User";
import { githubLoginCallback, lineLoginCallback } from "./controllers/userController";
import routes from "./routes";

passport.use(User.createStrategy());

passport.use(
	new GithubStrategy(
		{
			clientID: process.env.GH_ID,
			clientSecret: process.env.GH_SECRET,
			callbackURL: `http://${process.env.WETUBE}:${process.env.PORT}${routes.githubCallback}`
		},
		githubLoginCallback
	)
);

passport.use(
	new LineStrategy(
		{
			channelID: process.env.LINE_ID,
			channelSecret: process.env.LINE_SECRET,
			callbackURL: `http://${process.env.WETUBE}:${process.env.PORT}${routes.lineCallback}`,
			scope: ["profile", "openid", "email"],
			botPrompt: "normal"
		},
		lineLoginCallback
	)
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
