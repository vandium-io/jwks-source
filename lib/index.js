const JWKSClient = require( './client' );

const Providers = require( './providers' );

module.exports = {

  client: ( values ) => new JWKSClient( values ),

  Providers,
};
