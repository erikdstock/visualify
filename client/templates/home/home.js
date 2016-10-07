/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
	'click #shareBtn' : function() {

	Session.set("shareLoading", true);

	//scrape some data, probably could have thought this out better but se la vi
	var template = Template.instance();
	var relevantData = {};

	relevantData.topShortArtists  = [];
	relevantData.topMediumArtists = [];
	relevantData.topLongArtists   = [];
 
	relevantData.topShortTracks   = [];
	relevantData.topMediumTracks  = [];
	relevantData.topLongTracks    = [];


	for(var i = 0; i < 5; i++){
		//artists
		relevantData.topShortArtists.push( { name : template.topShortArtists.curValue[i].name, image : template.topShortArtists.curValue[i].images[0].url, link : template.topShortArtists.curValue[i].external_urls.spotify } );
		relevantData.topMediumArtists.push( { name : template.topMediumArtists.curValue[i].name, image : template.topMediumArtists.curValue[i].images[0].url, link : template.topLongArtists.curValue[i].external_urls.spotify} );
		relevantData.topLongArtists.push( { name : template.topLongArtists.curValue[i].name, image : template.topLongArtists.curValue[i].images[0].url, link : template.topLongArtists.curValue[i].external_urls.spotify});

		relevantData.topShortTracks.push({ name : template.topShortTracks.curValue[i].name, image : template.topShortTracks.curValue[i].album.images[0].url, link : template.topShortTracks.curValue[i].external_urls.spotify, bandName : template.topShortTracks.curValue[i].artists[0].name});
		relevantData.topMediumTracks.push({ name : template.topMediumTracks.curValue[i].name, image : template.topMediumTracks.curValue[i].album.images[0].url, link : template.topMediumTracks.curValue[i].external_urls.spotify, bandName : template.topMediumTracks.curValue[i].artists[0].name});
		relevantData.topLongTracks.push({ name : template.topLongTracks.curValue[i].name, image : template.topLongTracks.curValue[i].album.images[0].url, link : template.topLongTracks.curValue[i].external_urls.spotify, bandName : template.topLongTracks.curValue[i].artists[0].name});	
	}

	var bgImageNum = Math.floor((Math.random() * 11));

	relevantData.bgArtist = {};
	relevantData.bgArtist.image = template.topLongArtists.get()[bgImageNum].images[0].url;
	relevantData.bgArtist.name = template.topLongArtists.get()[bgImageNum].name;
	relevantData.displayName = Meteor.user().profile.display_name;
	relevantData.userImage = Meteor.user().profile.images[0].url;
	relevantData.createdAt = new Date();

	Meteor.call('saveMusic', relevantData, function(error,result) {
		if(error){
			console.log(error.reason);
			return;
		}
		console.log('result from the method');
		console.log(result);
		var url = window.location.href + "share/" + result;
		FB.ui({
		    method: 'share',
		    display: 'popup',
		    href: url,
		}, function(response){});
		Session.set('shareLoading', false);
	});
  },
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
	shareLoading : function () {
		return Session.get("shareLoading");
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
	Session.set("shareLoading", false);
	Session.set("finishedLoading", false);
	Template.instance().loadingShare = false;

	//load the facebook SDK
	window.fbAsyncInit = function() {
	    FB.init({
	      appId      : '318147065215923',
	      xfbml      : true,
	      version    : 'v2.8'
	    });
	  };

	  (function(d, s, id){
	     var js, fjs = d.getElementsByTagName(s)[0];
	     if (d.getElementById(id)) {return;}
	     js = d.createElement(s); js.id = id;
	     js.src = "https://connect.facebook.net/en_US/sdk.js";
	     fjs.parentNode.insertBefore(js, fjs);
	   }(document, 'script', 'facebook-jssdk'));

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
