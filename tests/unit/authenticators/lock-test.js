/* jshint expr:true */
import { it } from 'ember-mocha';
import { describe, beforeEach } from 'mocha';
import { expect } from 'chai';
import Lock from 'auth0-ember-simple-auth/authenticators/lock';

describe('LockAuthenticator', () => {
  let authenticator;
  let lock;

  beforeEach(() => {
    lock = {
      container: {
        lookupFactory() {
          return {
            'auth0-ember-simple-auth': {
              clientID: 'some-token',
              domain: 'example.com'
            }
          };
        }
      }
    };
    authenticator = Lock.create(lock);
  });

  describe('#hasJWT', () => {
    it('returns false when jwt is undefined', (done) => {
      expect(authenticator.get('jwt')).to.be.undefined;
      expect(authenticator.get('hasJWT')).to.be.false;
      done();
    });
  });

  describe('#expiresIn', () => {
    it('returns 0 when jwt is undefined', (done) => {
      expect(authenticator.get('jwt')).to.be.undefined;
      expect(authenticator.get('expiresIn')).to.equal(0);
      done();
    });
  });

  describe('#beforeExpire', () => {
    it('returns a resolving promise', (done) => {
      authenticator.beforeExpire().then(() => {
        expect(true).to.be.true;
        done();
      });
    });
  });

  const resolveWithData = ['afterAuth', 'afterRestore', 'afterRefresh'];
  resolveWithData.forEach((name) => {
    const obj = {
      a: 1
    };
    describe(`#${name}`, () => {
      it('returns data with a resolving promise', (done) => {
        authenticator[name](obj).then((data) => {
          expect(data).to.eql({
            a: 1
          });
          done();
        });
      });
    });
  });

  describe('#invalidate', () => {
    it('returns a promise that resolves', (done) => {
      const promise = authenticator.invalidate();
      promise.then(() => {
        expect(true).to.be.true;
        done();
      });
    });
  });
});
