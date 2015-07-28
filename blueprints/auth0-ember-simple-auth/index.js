module.exports = {
  normalizeEntityName: function() {
  },

  afterInstall: function() {
    return this.addBowerPackagesToProject([
      { name: 'ember-simple-auth',      target: '0.8.0'  },
      { name: 'auth0-lock',             target: '~7.7.1'  },
      { name: 'jsrsasign',              target: '~4.8.3'  }
    ]);
  }
};