module.exports = {
  normalizeEntityName: function() {
  },

  afterInstall: function() {
    return this.addBowerPackagesToProject([
      { name: 'auth0-lock',             target: '~7.10.0'  },
      { name: 'jsrsasign',              target: '~4.9.1'  }
    ]);
  }
};
