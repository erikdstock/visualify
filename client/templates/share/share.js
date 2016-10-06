Template.Share.onCreated(function () {
	console.log("data from template");
	console.log(this.data);
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
// Template.Share.helpers({
// 	isLoaded: function() {
// 		return Session.get("finishedLoading");
// 	},
// 	getUserImage: function() {
// 		return this.data.userImage;
// 	},
// 	getTop5ArtistsShort: function() {
// 		return this.data.artists.topShortArtists;
// 	},
// 	getTop5TracksShort: function() {
// 		return this.data.tracks.topShortTracks;
// 	},
// 	getTop5ArtistsMedium: function() {
// 		return this.data.artists.topMediumArtists;
// 	},
// 	getTop5TracksMedium: function() {
// 		return this.data.tracks.topMediumTracks;
// 	},
// 	getTop5ArtistsLong: function() {
// 		return this.data.artists.getTop5ArtistsLong;
// 	},
// 	getTop5TracksLong: function() {
// 		return this.data.tracks.getTop5TracksLong;
// 	},
// 	userName: function() {
// 		return this.data.displayName;
// 	},
// 	getBackgroundCSS: function() {
// 		var cssData = "url(" + this.data.bgArtist.img + ")";
// 		return cssData;
// 	},
// 	getBgArtist: function() {
// 		return this.data.bgArtist.name;
// 	}
// });

// Template.artistshare.helpers({
// 	getImage: function() {
// 		return this.image;
// 	},
// 	getLink: function() {
// 		return this.link;
// 	},
// });

// Template.trackshare.helpers({
// 	getImage: function() {
// 		return this.image;
// 	},
// 	getBandName: function() {
// 		return this.bandName;
// 	},
// 	getLink: function() {
// 		return this.link;
// 	},
// });