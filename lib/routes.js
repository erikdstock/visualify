Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});