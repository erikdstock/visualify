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
				return Meteor.subscribe('shares', this.params._id);
			},
      data: function() {
      	var _id = this.params._id;
      	Meteor.subscribe('shares', _id);
      	b = Shares.find( { _id : _id } ).fetch();
        return b[0];
      },
      seo: {
        title : function () {
        	return "visualify"; 
        },
        og : {
        	title : function () {
						return this.data().displayName + '\'s music';
					},
					image : function () {
						return this.data().bgArtist.image;
					},
					description : function () {
						return "My top artist for this month was " + this.data().topShortTracks[0].bandName + ". I'm not too surprised.";
					}
        }
      }, action: function () {
      	console.log("data from router action");
      	console.log(this.data())
      	this.render("Share");
      }
    });


}