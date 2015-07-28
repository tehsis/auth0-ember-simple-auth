import Base from 'auth0-ember-simple-auth/authorizers/jwt';

export default Base.extend({
  authorize: function(jqXHR, requestOptions) {
    var secureData         = this.get('session.secure');
    var userToken          = secureData[this.tokenAttributeName];
    var userIdentification = secureData[this.identificationAttributeName];
  }
});