
const JWKSClient = require( './client');

module.exports = {

  Auth0: ( { domain } ) => {

    return new JWKSClient({

      hostname: domain,
      path: '/.well-known/jwks.json',
    });
  },

  AWSCognito: ( { userPoolId, region = process.env.AWS_REGION } ) => {

    return new JWKSClient({

      hostname: `cognito-idp.${region}.amazonaws.com`,
      path: `/${userPoolId}/.well-known/jwks.json`,
    });
  },
};
