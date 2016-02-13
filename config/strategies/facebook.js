'use strict';

/**
 * Module dependencies.
 */
var passport = require('passport'),
	url = require('url'),
	FacebookStrategy = require('passport-facebook').Strategy,
	config = require('../config'),
	users = require('../../app/controllers/users.server.controller');

module.exports = function() {
	// Use facebook strategy
	//console.log(config.facebook.callbackURL);
	passport.use(new FacebookStrategy({
			clientID: config.facebook.clientID,
			clientSecret: config.facebook.clientSecret,
			callbackURL: 'https://osync.herokuapp.com/auth/facebook/callback',
			//callbackURL: config.facebook.callbackURL,
			passReqToCallback: true
		},
		function(req, accessToken, refreshToken, profile, done) {
			// Set the provider data and include tokens
			var providerData = profile._json;
			providerData.accessToken = accessToken;
			providerData.refreshToken = refreshToken;


			// var _firstName = (profile.name.givenName) ? profile.name.givenName : '';
			// var _lastName = (profile.name.familyName) ? profile.name.familyName : '';
			// var _displayName = (profile.displayName) ? profile.displayName : '';
			// var _email = (profile.emails[0].value) ? profile.emails[0].value : '';
			// var _username = (profile.username) ? profile.username : '';
			// var _providerData = (providerData) ? providerData : '';
			var username = profile.displayName.split(' ');
			// Create the user OAuth profile
			var providerUserProfile = {
				firstName: username[0],
				lastName: username[1],
				displayName: profile.displayName,
				email: '',
				username: profile.id,
				provider: 'facebook',
				providerIdentifierField: 'id',
				providerData: providerData
			};

			// Create the user OAuth profile
			// var providerUserProfile = {
			// 	firstName: profile.username,
			// 	lastName: 'profile.name.familyName',
			// 	displayName: 'profile.displayName',
			// 	email: 'profile.emails[0].value',
			// 	username: 'profile.username',
			// 	provider: 'facebook',
			// 	providerIdentifierField: 'id',
			// 	providerData: 'providerData'
			// };

			// Save the user OAuth profile
			users.saveOAuthUserProfile(req, providerUserProfile, done);
		}
	));
};
