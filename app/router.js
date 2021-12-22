import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('employee');
  this.route('not-found', {path : '/*path'});
  this.route('create-employee');
  this.route('employee-list');
  this.route('edit-employee');
});

export default Router;
