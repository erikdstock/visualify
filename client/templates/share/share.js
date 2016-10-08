Template.Share.onCreated(function () {
	this.ui = this.data.data;
});

Template.Share.onRendered(function () {
});

Template.Share.events({
	'click .my-music-button' : function () {
		event.preventDefault();
		window.open("http://localhost.com", "_newtab")
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
 		return Template.instance().ui.userImage;
 	},
 	getTop5ArtistsShort: function() {
 		return Template.instance().ui.topShortArtists;
 	},
 	getTop5TracksShort: function() {
 		return Template.instance().ui.topShortTracks;
 	},
 	getTop5ArtistsMedium: function() {
 		return Template.instance().ui.topMediumArtists;
 	},
 	getTop5TracksMedium: function() {
 		return Template.instance().ui.topMediumTracks;
 	},
 	getTop5ArtistsLong: function() {
 		return Template.instance().ui.topLongArtists;
 	},
 	getTop5TracksLong: function() {
 		return Template.instance().ui.topLongTracks;
 	},
 	userName: function() {
 		return Template.instance().ui.displayName;
 	},
 	getBackgroundCSS: function() {
 		var cssData = "url(" + Template.instance().ui.bgArtist.image + ")";
 		return cssData;
 	},
 	getBgArtist: function() {
 		return Template.instance().ui.bgArtist.name;
 	},
 	getFirstName: function () {
 		var fullName = Template.instance().ui.displayName;
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