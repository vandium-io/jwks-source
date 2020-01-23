const { expect } = require( 'chai' );

const sinon = require( 'sinon' );

const rewiremock = require( 'rewiremock/node' );

const sampleData = {
    "keys": [{
        "alg": "RS256",
        "e": "AQAB",
        "kid": "abcdefghijklmnopqrsexample=",
        "kty": "RSA",
        "n": "lsjhglskjhgslkjgh43lj5h34lkjh34lkjht3example",
        "use": "sig"
    }, {
        "alg":
        "RS256",
        "e": "AQAB",
        "kid": "fgjhlkhjlkhexample=",
        "kty": "RSA",
        "n": "sgjhlk6jp98ugp98up34hpexample",
        "use": "sig"
    }]
};

describe( 'get-jwks', function() {

  let getJWKS;

  let httpsAsyncStub;

  beforeEach( () => {

    httpsAsyncStub = sinon.stub();

    getJWKS = rewiremock.proxy( '../get-jwks', {
      '../async-https':  httpsAsyncStub
    });
  });

  describe( 'getKeys()', function() {

    it( 'normal operation', async () => {

      httpsAsyncStub.returns( Promise.resolve( JSON.stringify(sampleData) ));

      const jwks = await getJWKS( 'my-domain.whatever', '/path/to/whatever' );

      expect( jwks.keys ).to.eql( sampleData.keys );

      expect( httpsAsyncStub.firstCall.args[0] ).to.eql({

        hostname: 'my-domain.whatever',
        path: '/path/to/whatever',
        port: 443,
        method: 'GET'
      });
    });
  });
});
