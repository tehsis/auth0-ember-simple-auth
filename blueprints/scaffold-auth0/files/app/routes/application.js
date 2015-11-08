import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {

  actions: {
    authenticate() {
      var lockOptions = {authParams:{scope: 'openid'}};
        this.get('session').authenticate('simple-auth-authenticator:lock', lockOptions);
    }
  }
});
