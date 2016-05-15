/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

//Set up Spotify API
//var spotifyApi = new SpotifyWebApi();


Meteor.methods({
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
