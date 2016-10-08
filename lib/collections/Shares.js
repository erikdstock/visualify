Shares = new Mongo.Collection('shares');

//deny access on the client
Shares.deny({
	insert() { return true; },
	update() { return true; },
	remove() { return true; }
});

if(Meteor.isServer){
  Shares.allow({
    insert: function (){
      return true;
    },
    update: function (){
      return true;
    }
  })
}