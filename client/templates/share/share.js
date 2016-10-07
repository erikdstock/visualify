Template.Share.onCreated(function () {
});

Template.Share.onRendered(function () {
});

Template.Share.events({
	'click .my-music-button' : function () {
		window.location.href ="http://localhost:3000";
	}
});

/*****************************************************************************/
/* Share: Helpers */
/*****************************************************************************/
 Template.Share.helpers({
 	isLoaded: function() {
 		return Session.get("finishedLoading");
 	},
 	getUserImage: function() {
 		return Template.instance().data.userImage;
 	},
 	getTop5ArtistsShort: function() {
 		return Template.instance().data.topShortArtists;
 	},
 	getTop5TracksShort: function() {
 		return Template.instance().data.topShortTracks;
 	},
 	getTop5ArtistsMedium: function() {
 		return Template.instance().data.topMediumArtists;
 	},
 	getTop5TracksMedium: function() {
 		return Template.instance().data.topMediumTracks;
 	},
 	getTop5ArtistsLong: function() {
 		return Template.instance().data.topLongArtists;
 	},
 	getTop5TracksLong: function() {
 		return Template.instance().data.topLongTracks;
 	},
 	userName: function() {
 		return Template.instance().data.displayName;
 	},
 	getBackgroundCSS: function() {
 		var cssData = "url(" + Template.instance().data.bgArtist.image + ")";
 		return cssData;
 	},
 	getBgArtist: function() {
 		return Template.instance().data.bgArtist.name;
 	},
 	getFirstName: function () {
 		var fullName = Template.instance().data.displayName;
 		var firstName = fullName.split(" ")[0];
 		return firstName;
 	}
 })

 Template.Artistshare.helpers({
 	getImage: function() {
 		return this.image;
 	},
 	getLink: function() {
 		return this.link;
 	},
 })

 Template.Trackshare.helpers({
 	getImage: function() {
 		return this.image;
 	},
 	getBandName: function() {
 		return this.bandName;
 	},
 	getLink: function() {
 		return this.link;
 	},
 });