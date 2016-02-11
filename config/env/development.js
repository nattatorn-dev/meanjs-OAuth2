'use strict';

module.exports = {
	db: 'mongodb://admin:123456123mar@ds061454.mongolab.com:61454/lab',
	app: {
		title: 'StartApp - Development Environment'
	},
	facebook: {
		clientID: process.env.FACEBOOK_ID || 'APP_ID',
		clientSecret: process.env.FACEBOOK_SECRET || 'APP_SECRET',
		callbackURL: '/auth/facebook/callback'
	},
	twitter: {
		clientID: process.env.TWITTER_KEY || 'S0FJLUs6ZavOMw8ygzvFeKxvn',
		clientSecret: process.env.TWITTER_SECRET || '	7TZIzXm5GFJ8SGWNyoeFllkG5ftck5SAHjtSfSC75iQXi5TIzw',
		callbackURL: '/auth/twitter/callback'
	},
	google: {
		clientID: process.env.GOOGLE_ID || '386436797764-mb7bjed5aktpg0evr7ohceh148mmqu45.apps.googleusercontent.com',
		clientSecret: process.env.GOOGLE_SECRET || 'mT80QReWN_Q6GxjoCAJBdaM9',
		callbackURL: '/auth/google/callback'
	},
	linkedin: {
		clientID: process.env.LINKEDIN_ID || 'APP_ID',
		clientSecret: process.env.LINKEDIN_SECRET || 'APP_SECRET',
		callbackURL: '/auth/linkedin/callback'
	},
	github: {
		clientID: process.env.GITHUB_ID || 'APP_ID',
		clientSecret: process.env.GITHUB_SECRET || 'APP_SECRET',
		callbackURL: '/auth/github/callback'
	},
	mailer: {
		from: process.env.MAILER_FROM || 'MAILER_FROM',
		options: {
			service: process.env.MAILER_SERVICE_PROVIDER || 'MAILER_SERVICE_PROVIDER',
			auth: {
				user: process.env.MAILER_EMAIL_ID || 'MAILER_EMAIL_ID',
				pass: process.env.MAILER_PASSWORD || 'MAILER_PASSWORD'
			}
		}
	}
};
