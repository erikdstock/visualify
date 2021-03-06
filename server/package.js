/*
#########################
Package Config
#########################
*/


ServiceConfiguration.configurations.update(
  { "service": "spotify" },
  {
    $set: {
      clientId: Meteor.settings.spotifyid,
      secret: Meteor.settings.spotifysecret,
      loginStyle: "redirect"
    }
  },
  { upsert: true }
);
