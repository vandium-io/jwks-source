const rpc = require('sync-rpc');

const getJWKS = require( './get-jwks' );

const JWKS = require( './jwks' );

const getJWKSClient = rpc( __dirname + '/get-jwks-worker.js', 'jwks-worker' );

class JWKSClient {

  constructor( { hostname, path } = {} ) {

    this._hostname = hostname;
    this._path = path;
  }

  hostname( value ) {

    this._hostname = value;
    return this;
  }

  path( value ) {

    this._path = value;
    return this;
  }

  async get() {

    this._validate();

    return new JWKS( await getJWKS( this._hostname, this._path ) );
  }

  getSync() {

    this._validate();

    return new JWKS( getJWKSClient( { hostname: this._hostname, path: this._path } ) );
  }

  _validate() {

    if( !this._hostname ) {

      throw new Error( 'host name not set' );
    }

    if( !this._path ) {

      throw new Error( 'path not set' );
    }
  }
}

module.exports = JWKSClient;
