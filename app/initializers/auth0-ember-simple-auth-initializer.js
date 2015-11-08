import Authenticator from 'auth0-ember-simple-auth/authenticators/lock';
import Authorizer from 'auth0-ember-simple-auth/authorizers/jwt';

export default {
  name:         'auth0-ember-simple-auth-initializer',
  before:       'ember-simple-auth',
  initialize: function(registry) {
    registry.register('simple-auth-authenticator:lock', Authenticator);
    registry.register('simple-auth-authorizer:jwt', Authorizer);
  }
};
