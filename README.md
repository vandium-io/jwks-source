[![Build Status](https://travis-ci.org/vandium-io/jwks-source.svg?branch=master)](https://travis-ci.org/vandium-io/jwks-source)
[![npm version](https://badge.fury.io/js/jwks-sourcesvg)](https://badge.fury.io/js/jwks-source)

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
const { Provider } = require( 'jwks-source' );

const jwks = Provider.AWSCognito({

		userPoolId = 'us-east-1_ZLPZ8Z7yS',
		region: 'us-east-1'
	}).getAsync();

// jwks.keys = [ { jws instance}, ... ]

// jwks.id( kid )	// to get with a specific id
```

## Feedback

We'd love to get feedback on how to make this tool better. Feel free to contact
us at `feedback@vandium.io`

## License

[BSD-3-Clause](https://en.wikipedia.org/wiki/BSD_licenses)
