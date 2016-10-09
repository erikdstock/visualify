if(Meteor.isClient){
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
		      console.log('before this');
		      data = this.data().data;
		      console.log('after this');
		      SEO.set({
		        title : "Visualify",
		        og : {
		        	title : "Who Is Your Binge-Artist?",
					image : data.bgArtist.image,
					description : "My top artist this month was " + data.topShortTracks[0].bandName + ". Click to see the rest of "  + data.displayName.split(" ")[0] + "\'s top music and find out YOUR top artists and songs on Visualify"
		        }
		      });
		    }
		  });
		});
}