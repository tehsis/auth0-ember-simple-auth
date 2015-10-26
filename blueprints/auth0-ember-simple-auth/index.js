module.exports = {
  normalizeEntityName: function() {
  },

  afterInstall: function() {
    return this.addBowerPackagesToProject([
      { name: 'auth0-lock',             target: '^7.10.2'  },
      { name: 'jsrsasign',              target: '^5.0.1'  }
    ]);
  }
};
