Meteor.publish('shares', function(_id){
	return Shares.find({ _id : _id });
});

