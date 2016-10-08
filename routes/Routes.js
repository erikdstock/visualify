if(Meteor.isClient){

	Router.plugin('seo', {
	  defaults: { 
	  	title: "Visualify",
	  	og: {
	  		url: "https://beta.visualify.xyz",
	  		title: "Visualify",
	  		description: "my top artists and tracks",
	  		image : "https://i.scdn.co/image/214b1108d830f4426cb182cf742a409d72317cf6"
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
        	return "Visualify"; 
        },
        og : {
        	url : function () {
        		return "https://beta.visualify.xyz/share/" + this.params._id;
        	},
        	title : function () {
				return "Who Is Your Binge-Artist?";
			},
			image : function () {
				return this.data().data.bgArtist.image;
			},
			description : function () {
				return "My top artist this month was " + this.data().data.topShortTracks[0].bandName + 
				". Click to see the rest of " + 
				this.data().data.displayName.split(" ")[0] + "\'s top music and find out YOUR top artists and songs on Visualify";
			}
        }
      }, action: function () {
      	this.render("Share");
      }
    });


}