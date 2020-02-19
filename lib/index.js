const JWKSClient = require( './client' );

const providers = require( './providers' );

const { fromPath, fromConfigFile } = require( './resource' );

const JWKS = require( './jwks' );

module.exports = {

  client: ( values ) => new JWKSClient( values ),

  Provider: providers,

  fromPath,

  fromConfigFile,

  fromObject: (obj) => new JWKS( obj ),
};
