[![Build Status](https://travis-ci.org/vandium-io/aws-cognito-public-keys.svg?branch=master)](https://travis-ci.org/vandium-io/aws-cognito-public-keys)
[![npm version](https://badge.fury.io/js/aws-cognito-public-keys.svg)](https://badge.fury.io/js/aws-cognito-public-keys)

# `jwks-source`

Module for retrieving JWKS

## Features
* Synchronous and asynchronous methods
* Node.js 12.x compatible, works in AWS Lambda environments

## Installation
Install via npm.

	npm install jwks-source --save

## Getting Started

```js
const { getKeysSync } = require( 'aws-cognito-public-keys' );

const userPoolId = 'us-east-1_ZLPZ8Z7yS'; // your user pool id

const awsRegion = 'us-east1';             // valid AWS Region

const key = getKeysSync( userPoolId, awsRegion );

// keys =
// {
//    "<key id 1>": { ...key1 ... }
//    "<key id 2>": { ...key2 ... }
//    ..
// }
```

## API

## Feedback

We'd love to get feedback on how to make this tool better. Feel free to contact
us at `feedback@vandium.io`

## License

[BSD-3-Clause](https://en.wikipedia.org/wiki/BSD_licenses)
