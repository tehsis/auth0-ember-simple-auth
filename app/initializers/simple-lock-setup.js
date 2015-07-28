import Authenticator from 'auth0-ember-simple-auth/authenticators/lock';

export default {
  name:         'auth0-ember-simple-auth-setup',
  before:       'simple-auth',
  initialize: function(registry, application) {
    application.register('simple-auth-authenticator:lock', Authenticator);
  }
};