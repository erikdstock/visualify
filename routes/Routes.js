if(Meteor.isClient){

	SEO.config({
            title: 'Manuel Schoebel - MVP Development',
            meta: {
                'description': 'Manuel Schoebel develops Minimal Viable Producs (MVP) for Startups'
            },
            og: {
                'image': 'http://manuel-schoebel.com/images/authors/manuel-schoebel.jpg' 
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
		    ondAfterAction: function() {
		      var data;
		    }
		  });
		});
}