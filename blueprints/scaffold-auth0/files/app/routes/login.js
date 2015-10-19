import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
      didTransition: function() {
        // Check out the docs for all the options:
        // https://auth0.com/docs/libraries/lock/customization

        // This will launch lock.js in popup mode
        var lockOptions = {authParams:{scope: 'openid'}};

        this.get('session').authenticate('simple-auth-authenticator:lock', lockOptions);
      }
    }
});
