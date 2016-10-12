if(Meteor.isClient){

	SEO.config({
		auto: {
			twitter: false
		}
	});

	Router.configure({
	  layoutTemplate: 'MasterLayout',
	  loadingTemplate: 'loading',
	  notFoundTemplate: 'NotFound'
	});

	Router.map(function () {
		return this.route('Home', {
			path: '/',
			onAfterAction: function () {
				var url = window.location.href;
				SEO.set({
					'title' : 'Visualify',
					meta : {
						'title': 'Visualify',
						'description' : 'Visualize your top artists and songs on Spotify with one click.'
					},
					og : {
						type : 'website',
						url : url,
						title : 'Who Is Your Binge-Artist?',
						image : '/images/visualify.png',
						description : "Visualize your top artists and songs on Spotify with one click."
					}
				})
			}
		})
	})
	
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
		      if (!Meteor.isClient || !this.data() || !Meteor.subscribe('shares').ready()) {
		        return;
		      }
		      var url = window.location.href;
		      data = this.data().data;
		      console.log("from the route");
		      console.log(data.ogImage);
		      SEO.set({
		      	'title' : "Visualify",
		        meta : {
		        	'title': 'Visualify',
		        	'description' : "Visualize your top artists and songs on Spotify with one click."
		        },
		        og : {
		        	type: 'website',
		        	url : url,
		        	title : 'Who Is Your Binge-Artist?',
					image : data.ogImage.url,
					'image:width' : data.ogImage.width,
					'image:height' : data.ogImage.height,
					description : data.displayName.split(' ')[0] + '\'s top artist this month was ' + data.topShortArtists[0].name + '. Click to see the rest of '  + data.displayName.split(' ')[0] + '\'s top music on Spotify and see YOUR top artists and songs with Visualify'
		        }
		      });
		    }
		  });
		});
}