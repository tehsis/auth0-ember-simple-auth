import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    showAuth0Lock: function(){
      // This will launch lock.js in popup mode
      var options = {authParams:{scope: 'openid'}};

      this.get('session').authenticate('authenticator:auth0', options);
    }
  }
});
