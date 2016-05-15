/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
	isLoaded: function() {
		return Session.get("finishedLoading");
	},
	getUserImage: function() {
		return Meteor.user().profile.images[0].url;
	},
	getTop5ArtistsShort: function() {
		var top5 = [];
		for (var i = 0; i < 5; i++)
		{
			top5[i] = Template.instance().topShortArtists.get()[i];
		}
		return top5;
	},
	getTop5TracksShort: function() {
		var top5 = [];
		for (var i = 0; i < 5; i++)
		{
			top5[i] = Template.instance().topShortTracks.get()[i];
		}
		return top5;
	},
	getTop5ArtistsMedium: function() {
		var top5 = [];
		for (var i = 0; i < 5; i++)
		{
			top5[i] = Template.instance().topMediumArtists.get()[i];
		}
		return top5;
	},
	getTop5TracksMedium: function() {
		var top5 = [];
		for (var i = 0; i < 5; i++)
		{
			top5[i] = Template.instance().topMediumTracks.get()[i];
		}
		return top5;
	},
	getTop5ArtistsLong: function() {
		var top5 = [];
		for (var i = 0; i < 5; i++)
		{
			top5[i] = Template.instance().topLongArtists.get()[i];
		}
		return top5;
	},
	getTop5TracksLong: function() {
		var top5 = [];
		for (var i = 0; i < 5; i++)
		{
			top5[i] = Template.instance().topLongTracks.get()[i];
		}
		return top5;
	},
	userName: function() {
		return Meteor.user().profile.display_name;
	},
	getBackgroundCSS: function() {
		//get a random artist to be the background
		var bgImageNum = Math.floor((Math.random() * 11));


		//get the random artist from the top long artists and put it in css data
		var cssData = "url(" + Template.instance().topLongArtists.get()[bgImageNum].images[0].url + ")";

		//set the background artist in a session variable if we want more information
		//(we use this to get the artist name later)
		Session.set("bgArtist", Template.instance().topLongArtists.get()[bgImageNum]);

		return cssData;
	},
	getBgArtist: function() {
		//return the background artist name
		return Session.get("bgArtist").name;
	}
});

Template.artist.helpers({
	getImage: function() {
		return this.images[0].url;
	},
	getLink: function() {
		return this.external_urls.spotify;
	},
})

Template.track.helpers({
	getImage: function() {
		return this.album.images[0].url;
	},
	getBandName: function() {
		return this.artists[0].name;
	},
	getLink: function() {
		return this.external_urls.spotify;
	},
})

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.onCreated(function () {

	Session.set("finishedLoading", false);

	//make a call to templates and set up reactive variables
	this.topShortArtists = new ReactiveVar([]);
	this.topShortTracks = new ReactiveVar([]);
	this.topMediumArtists = new ReactiveVar([]);
	this.topMediumTracks = new ReactiveVar([]);
	this.topLongArtists = new ReactiveVar([]);
	this.topLongTracks = new ReactiveVar([]);
	var template = this;
	Meteor.call('getTopArtists', 'short_term', function(error,result) {
		if(error){
			console.log(error.reason);
			return;
		}
		
		template.topShortArtists.set(result.items);
	});

	Meteor.call('getTopTracks', 'short_term', function(error,result) {
		if(error){
			console.log(error.reason);
			return;
		}
		
		template.topShortTracks.set(result.items);
	});

	Meteor.call('getTopArtists', 'medium_term', function(error,result) {
		if(error){
			console.log(error.reason);
			return;
		}
		
		template.topMediumArtists.set(result.items);
	});

	Meteor.call('getTopTracks', 'medium_term', function(error,result) {
		if(error){
			console.log(error.reason);
			return;
		}
		
		template.topMediumTracks.set(result.items);
	});

	Meteor.call('getTopArtists', 'long_term', function(error,result) {
		if(error){
			console.log(error.reason);
			return;
		}
		
		template.topLongArtists.set(result.items);
	});

	Meteor.call('getTopTracks', 'long_term', function(error,result) {
		if(error){
			console.log(error.reason);
			return;
		}
		
		template.topLongTracks.set(result.items);
		Session.set("finishedLoading", true);
	});
});

Template.Home.onRendered(function () {
});

Template.Home.onDestroyed(function () {
});
