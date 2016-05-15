/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.SpotifyLogin.events({
	'click .loginSpotify' (event, instance) {
		var options = {
		  showDialog: false, // Whether or not to force the user to approve the app again if they’ve already done so.
		  requestPermissions: ['user-read-email user-top-read'] // Spotify access scopes.
		};
		Meteor.loginWithSpotify(options, function(err) {
	  		console.log(err || "No error");
	  	});
	},
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.SpotifyLogin.helpers({

});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.SpotifyLogin.onCreated(function () {
});

Template.SpotifyLogin.onRendered(function () {
});

Template.SpotifyLogin.onDestroyed(function () {
});
