const getJWKS = require( './get-jwks' );

module.exports = function () {

  return async ( { hostname, path } ) => {

    return getJWKS( hostname, path );
  }
};
