import Ember from 'ember';
import BaseAuthorizer from 'ember-simple-auth/authorizers/base';

export default BaseAuthorizer.extend({

  authorize: function(jqXHR /*, requestOptions */) {
    var secureData = this.get('session.secure');

    if (this.get('session.isAuthenticated') && !Ember.isEmpty(secureData.jwt)) {
      jqXHR.setRequestHeader('Authorization', 'Bearer ' + secureData.jwt);
    }
  }
});
