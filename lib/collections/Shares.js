Shares = new Mongo.Collection('shares');

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