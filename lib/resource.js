const { readFileSync } = require( 'fs' );

const path = require( 'path' )

const JWKS = require( './jwks' );

function fromPath( filePath ) {

  const parsed = JSON.parse( readFileSync( filePath, 'utf8' ) );

  return new new JWKS( parsed );
}

function fromConfigFile( name = 'jwks.json' ) {

  return fromPath( path.resolve( process.cwd(), name ) );
}

module.exports = {

  fromPath,
  fromResource,
  fromConfigFile,
};
