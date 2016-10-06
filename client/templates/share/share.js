import { Template } from 'meteor/templating';

Template.Share.onCreated(function () {
	console.log(this.data);
	window.fbAsyncInit = function() {
	    FB.init({
	      appId      : '318147065215923',
	      xfbml      : true,
	      version    : 'v2.8'
	    });
	  };

	  (function(d, s, id){
	     var js, fjs = d.getElementsByTagName(s)[0];
	     if (d.getElementById(id)) {return;}
	     js = d.createElement(s); js.id = id;
	     js.src = "https://connect.facebook.net/en_US/sdk.js";
	     fjs.parentNode.insertBefore(js, fjs);
	   }(document, 'script', 'facebook-jssdk'));

	FB.ui({
	    method: 'share',
	    display: 'popup',
	    href: "http://google.com",
    }, function(response){});
});