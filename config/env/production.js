'use strict';

module.exports = {
	//db: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://' + (process.env.DB_1_PORT_27017_TCP_ADDR || 'localhost') + '/startapp',
	db: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://admin:123456123mar@ds061454.mongolab.com:61454/lab',
	// assets: {
	// 	lib: {
	// 		css: [
	// 			'public/lib/bootstrap/dist/css/bootstrap.min.css',
	// 			'public/lib/bootstrap/dist/css/bootstrap-theme.min.css',
	// 		],
	// 		js: [
	// 			'public/lib/angular/angular.min.js',
	// 			'public/lib/angular-resource/angular-resource.js',
	// 			'public/lib/angular-cookies/angular-cookies.js',
	// 			'public/lib/angular-animate/angular-animate.js',
	// 			'public/lib/angular-touch/angular-touch.js',
	// 			'public/lib/angular-sanitize/angular-sanitize.js',
	// 			'public/lib/angular-ui-router/release/angular-ui-router.min.js',
	// 			'public/lib/angular-ui-utils/ui-utils.min.js',
	// 			'public/lib/angular-bootstrap/ui-bootstrap-tpls.min.js'
	// 		]
	// 	},
	// 	css: 'public/dist/application.min.css',
	// 	js: 'public/dist/application.min.js'
	// },
	facebook: {
		clientID: process.env.FACEBOOK_ID || '1313090648716916',
		clientSecret: process.env.FACEBOOK_SECRET || 'dbf70589ce6d9d02c467ce838754e539',
		callbackURL: '/auth/facebook/callback'
	},
	twitter: {
		clientID: process.env.TWITTER_KEY || 'S0FJLUs6ZavOMw8ygzvFeKxvn',
		clientSecret: process.env.TWITTER_SECRET || '7TZIzXm5GFJ8SGWNyoeFllkG5ftck5SAHjtSfSC75iQXi5TIzw',
		callbackURL: '/auth/twitter/callback'
	},
	google: {
		clientID: process.env.GOOGLE_ID || '386436797764-l3k1jv0ftrmbeb8ai7kdaegcok1l6mp7.apps.googleusercontent.com',
		clientSecret: process.env.GOOGLE_SECRET || 'x8MGJFf0C7i8tF3up6F--oWS',
		callbackURL: '/auth/google/callback'
	},
	linkedin: {
		clientID: process.env.LINKEDIN_ID || 'APP_ID',
		clientSecret: process.env.LINKEDIN_SECRET || 'APP_SECRET',
		callbackURL: '/auth/linkedin/callback'
	},
	github: {
		clientID: process.env.GITHUB_ID || '430b2b0a8f59acbb4a82',
		clientSecret: process.env.GITHUB_SECRET || '41715a3dab81851c3354045583bb30934b547b68',
		callbackURL: '/auth/github/callback'
	},
	mailer: {
		from: process.env.MAILER_FROM || 'nattatorn.dev@gmail.com',
		options: {
			service: process.env.MAILER_SERVICE_PROVIDER || 'gmail',
			auth: {
				user: process.env.MAILER_EMAIL_ID || 'nattatorn.dev@gmail.com',
				pass: process.env.MAILER_PASSWORD || '123456123mar'
			}
		}
	}
};
