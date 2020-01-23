const httpsAsync = require( './async-https' );

const PORT = 443;

const METHOD = 'GET';

async function getJWKS( hostname, path ) {

  const result = await httpsAsync( { hostname, path, port: PORT, method: METHOD } );

  return JSON.parse( result );
}

module.exports = getJWKS;
