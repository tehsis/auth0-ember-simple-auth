import Authenticator from 'auth0-ember-simple-auth/authenticators/lock';
import Authorizer from 'auth0-ember-simple-auth/authorizers/jwt';

export default {
  name:         'auth0-ember-simple-auth-initializer',
  before:       'simple-auth',
  initialize: function(registry, application) {
    application.register('simple-auth-authenticator:lock', Authenticator);
    application.register('simple-auth-authorizer:jwt', Authorizer);
  }
};