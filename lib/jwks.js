
class JWKS {

  constructor( jwks ) {

    this._keys = [ ...jwks.keys ];
  }

  id( kid ) {

    for( let key of this._keys ) {

      if( key.kid === kid ) {

        return key;
      }
    }

    throw new Error( 'Unknown key id: ' + kid );
  }

  get keys() {

    return [ ...this._keys ];
  }
}

module.exports = JWKS;
