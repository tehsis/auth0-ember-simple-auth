import Ember from 'ember';
import Base from 'ember-simple-auth/authorizers/base';

export default Base.extend({

  authorize: function(jqXHR /*, requestOptions */) {
    var secureData = this.get('session.secure');

    if (this.get('session.isAuthenticated') && !Ember.isEmpty(secureData.jwt)) {
      jqXHR.setRequestHeader('Authorization', 'Bearer ' + secureData.jwt);
    }
  }
});
