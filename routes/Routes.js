if(Meteor.isClient){

	Router.plugin('seo', {
	  defaults: { 
	  	title: "visualify",
	  	og: {
	  		title: "Visualify",
	  		description: "my top artists and tracks",
	  		image : "picture of my penis"
	  	}
	  }
	});

	Router.route('Share/:_id', {
	  	waitOn: function () {
	  		return Meteor.subscribe('shares');
	  	},
      data: function() {
      	var _id = this.params._id;
      	Meteor.subscribe('shares', _id);
      	var b = Shares.find({ _id : _id }).fetch();
        return b[0];
      },
      seo: {
        title: function() {
          return this.data().displayName + "\'s music";
        },
        og : {
        	image : function () {
        		return this.data().bgArtist;
        	}, 
        	description : function () {
        		return "My top artist for this month was " + this.data().topShortTrackBandName[0] + ". I'm not too surprised.";
        	}
        }
      }, action: function () {
      	var id = this.params._id;
      	this.render("Share");
      }
    });


}