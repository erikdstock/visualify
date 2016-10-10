if(Meteor.isClient){

	SEO.config({
		auto: {
			twitter: false
		}
	});
	
	Router.map(function() {
		  return this.route('Share', {
		    path: '/share/:_id',
		    waitOn: function() {
		      return Meteor.subscribe('shares', this.params._id);
		    },
		    data: function() {
		      	var _id = this.params._id;
		      	Meteor.subscribe('shares', _id);
		      	b = Shares.find( { _id : _id } ).fetch();
		        return b[0];
		      },
		   onAfterAction: function() {
		      var data;
		      // The SEO object is only available on the client.
		      // Return if you define your routes on the server, too.
		      if (!Meteor.isClient || !this.data()) {
		        return;
		      }
		      var url = window.location.href + 'share/' + this.params._id;
		      data = this.data().data;
		      SEO.set({
		      	'title' : "Visualify",
		        meta : {
		        	'title': 'Visualify',
		        	'description' : "visualize your top artists and songs on spotify"
		        },
		        og : {
		        	type: 'website',
		        	url : url,
		        	title : 'Who Is Your Binge-Artist?',
					image : data.topShortArtists[0].image,
					description : data.displayName.split(' ')[0] + '\'s top artist this month was ' + data.topShortArtists[0].name + '. Click to see the rest of '  + data.displayName.split(' ')[0] + '\'s top music on Spotify and see YOUR top artists and songs with Visualify'
		        }
		      });
		    }
		  });
		});
}