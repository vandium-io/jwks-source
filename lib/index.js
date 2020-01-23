const JWKSClient = require( './client' );

const providers = require( './providers' );

module.exports = {

  client: ( values ) => new JWKSClient( values ),

  Provider: providers,
};
