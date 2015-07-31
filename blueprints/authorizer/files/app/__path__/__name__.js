import Ember from 'ember';
import Base from 'simple-auth/authorizers/base';

export default Base.extend({
  authorize: function(jqXHR, requestOptions) {

    var secureData = this.get('session.secure');

    if (this.get('session.isAuthenticated') && !Ember.isEmpty(secureData.jwt)) {
      
      //Set request headers here.
      //secureData.jwt is the jwt from Auth0.
      
      //Example usage
      //jqXHR.setRequestHeader('Authorization', 'Bearer ' + secureData.jwt);
      
      //Remember to update your config/environment.js
      //ENV['simple-auth'] = {
      //  ...
      //  authorizer: 'authenticator:my-cool-authenticator',
      //  ...
      //}

    }

  }
});