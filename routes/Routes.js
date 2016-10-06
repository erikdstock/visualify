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

	Router.route('Share', {
      data: function() {
        return JSON.parse('{"topShortArtistImages":["https://i.scdn.co/image/71dad2c7fc593ad1bcb2cd7be1a4a1892207a560","https://i.scdn.co/image/60aa90d2a607d24a4e171defc1cfbd26a7238ff8","https://i.scdn.co/image/76b36941a0f5311fc9d9fa5ce36366e0fff7e3ed","https://i.scdn.co/image/d8bc6593d0449a578ceb545fd1ae9172ac67bf83","https://i.scdn.co/image/7e1d6d8856af16a2be2814b98831f4014c41eeef"],"topMediumArtistImages":["https://i.scdn.co/image/d8bc6593d0449a578ceb545fd1ae9172ac67bf83","https://i.scdn.co/image/7e1d6d8856af16a2be2814b98831f4014c41eeef","https://i.scdn.co/image/1dfa207083157e1cd10767bd6e80e0dbcbb4609e","https://i.scdn.co/image/07c35e32c87810913eca6d95dcde841944e5f8b6","https://i.scdn.co/image/14b5e0ae021d4a3e8f8e41cd3a41b5d6efe60cda"],"topLongArtistImages":["https://i.scdn.co/image/f3d8fa5bf48ed983d9824ff3740583a7473cb704","https://i.scdn.co/image/7e1d6d8856af16a2be2814b98831f4014c41eeef","https://i.scdn.co/image/d8bc6593d0449a578ceb545fd1ae9172ac67bf83","https://i.scdn.co/image/bd0535270238db4f73442377463a5860b3522da3","https://i.scdn.co/image/1dfa207083157e1cd10767bd6e80e0dbcbb4609e"],"topShortTrackImages":["https://i.scdn.co/image/260c7a6da14bb13a4cc9e75bf5b549fb87fa22a9","https://i.scdn.co/image/4cee297b936e94c28aafc6f7da180ff380a26b7c","https://i.scdn.co/image/54ae81bff27a1979815d40846c763431d872b680","https://i.scdn.co/image/c10a05cdf8dc9ab6366007c02ebbc25c19a52df8","https://i.scdn.co/image/976e0c705d4d57a3d7897f47eb6ce033ba6a390c"],"topMediumTrackImages":["https://i.scdn.co/image/4cee297b936e94c28aafc6f7da180ff380a26b7c","https://i.scdn.co/image/976e0c705d4d57a3d7897f47eb6ce033ba6a390c","https://i.scdn.co/image/e76111f7ea77908a153ff8d9e70e258552742006","https://i.scdn.co/image/beb36c7c8d6ff7b769c7cca49581166a2861594c","https://i.scdn.co/image/2a496b034832d9bd955e40636b00c1c27af3555f"],"topLongTrackImages":["https://i.scdn.co/image/e76111f7ea77908a153ff8d9e70e258552742006","https://i.scdn.co/image/976b747fdc8f2055bb6c2d369cd98c663fc92a01","https://i.scdn.co/image/4cee297b936e94c28aafc6f7da180ff380a26b7c","https://i.scdn.co/image/3f891b7b0a3a46beaff1fd66dd31de7b0bd8ae95","https://i.scdn.co/image/2a496b034832d9bd955e40636b00c1c27af3555f"],"topShortArtistLinks":["https://open.spotify.com/artist/3GBPw9NK25X1Wt2OUvOwY3","https://open.spotify.com/artist/2qxJFvFYMEDqd7ui6kSAcq","https://open.spotify.com/artist/4CTKqs11Zgsv8EZTVzx764","https://open.spotify.com/artist/4EzkuveR9pLvDVFNx6foYD","https://open.spotify.com/artist/7x5rK9BClDQ8wmCkYAGsQp"],"topMediumArtistLinks":["https://open.spotify.com/artist/7enBrBojgBJuPPdqTq4Z5F","https://open.spotify.com/artist/7x5rK9BClDQ8wmCkYAGsQp","https://open.spotify.com/artist/4EzkuveR9pLvDVFNx6foYD","https://open.spotify.com/artist/5y2Xq6xcjJb2jVM54GHK3t","https://open.spotify.com/artist/5R3Hr2cnCCjt220Jmt2xLf"],"topLongArtistLinks":["https://open.spotify.com/artist/7enBrBojgBJuPPdqTq4Z5F","https://open.spotify.com/artist/7x5rK9BClDQ8wmCkYAGsQp","https://open.spotify.com/artist/4EzkuveR9pLvDVFNx6foYD","https://open.spotify.com/artist/5y2Xq6xcjJb2jVM54GHK3t","https://open.spotify.com/artist/5R3Hr2cnCCjt220Jmt2xLf"],"topShortTrackLinks":["https://open.spotify.com/track/48UPSzbZjgc449aqz8bxox","https://open.spotify.com/track/6UO755OcSvOPVVZOaJVH7v","https://open.spotify.com/track/4Vc3bzFxXdrABa2DxgyCMT","https://open.spotify.com/track/0wsis8nb0CLqWoRvEPvwiS","https://open.spotify.com/track/16tUjfbOz2vzcOC9KlMMfz"],"topMediumTrackLinks":["https://open.spotify.com/track/6UO755OcSvOPVVZOaJVH7v","https://open.spotify.com/track/16tUjfbOz2vzcOC9KlMMfz","https://open.spotify.com/track/3oxegYx25mBNgc7zRO7BOS","https://open.spotify.com/track/3EfufgoTrL8XwqT1xKncdw","https://open.spotify.com/track/007lsEHi6fP9LoYB7czYUa"],"topLongTrackLinks":["https://open.spotify.com/track/3oxegYx25mBNgc7zRO7BOS","https://open.spotify.com/track/0msqE0RDLK4cbyQGRI81cr","https://open.spotify.com/track/6UO755OcSvOPVVZOaJVH7v","https://open.spotify.com/track/58CrldAc1Z5WIBozT1NMJH","https://open.spotify.com/track/007lsEHi6fP9LoYB7czYUa"],"topShortTrackBandName":["Red Hot Chili Peppers","Robin Schulz","Hozier","Dispatch","Krewella"],"topMediumTrackBandName":["Robin Schulz","Krewella","Lemaitre","Deorro","Wyclef Jean"],"topLongTrackBandName":["Lemaitre","Lemaitre","Robin Schulz","John Legend","Wyclef Jean"],"bgArtist":"https://i.scdn.co/image/138824e603efe254ff9c6f5348b35faba80769a8","userName":"Zachary Denham","createdAt":"2016-10-05T22:52:33.848Z"}');
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
      	
      }
    });


}