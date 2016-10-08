/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

//Set up Spotify API
//var spotifyApi = new SpotifyWebApi();
Meteor.methods({
  'saveMusic' : function(data){
    if (! this.userId) {
      throw new Meteor.Error('saveMusic.unauthorized');
    }

    //public profile database id not saved in services so the user can't change it
    var _id;
    if( ! Meteor.user().shareProfile ){
      _id = Shares.insert({ data : data });
      Meteor.users.update(Meteor.userId(), {$set: {shareProfile: { _id : _id }}});
    } else {
      var shareId = Meteor.user().shareProfile._id;
      Shares.update({ _id : shareId }, {$set: { data : data }});
      _id = shareId;
    }
    return _id;

  },
  'getTopTracks': function(length) {
  	//create instance of spotify API so we can the update access token
  	var spotifyApi = new SpotifyWebApi();
  	spotifyApi.refreshAndUpdateAccessToken();

  	//get the Meteor user and set up url
  	var user = Meteor.user();
  	var url = "https://api.spotify.com/v1/me/top/tracks?time_range=" + length;
  	console.log(length);

  	//make an asynchronous call to the Spotify API
  	var response = HTTP.get(url, 
  		{
		  headers: {
		    'Authorization' : "Bearer " + user.services.spotify.accessToken,
		    'Content-Type':'application/json'
		  }
	});

	//return the response for use on the client
  	return response.data;
  },
  'getTopArtists': function(length) {
  	//create instance of spotify API so we can the update access token
  	var spotifyApi = new SpotifyWebApi();
  	spotifyApi.refreshAndUpdateAccessToken();

  	//get the Meteor user and set up url
  	var user = Meteor.user();
  	var url = "https://api.spotify.com/v1/me/top/artists?time_range=" + length;

  	//make an asynchronous call to the Spotify API
  	var response = HTTP.get(url, 
  		{
		  headers: {
		    'Authorization' : "Bearer " + user.services.spotify.accessToken,
		    'Content-Type':'application/json'
		  }
	});

	//return the response for use on the client
  	return response.data;

  },
});
