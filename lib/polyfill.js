/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isObject = require( '@stdlib/assert-is-object' );
var objectKeys = require( '@stdlib/utils-keys' );
var defineProperty = require( '@stdlib/utils-define-property' );
var format = require( '@stdlib/string-format' );


// MAIN //

/**
* Defines (and/or modifies) properties.
*
* @param {Object} obj - object on which to define the properties
* @param {Object} props - object with property descriptors
* @throws {TypeError} first argument must be an object
* @throws {TypeError} second argument must be an object
* @returns {Object} object with added and/or modified properties
*
* @example
* var obj = {};
* defineProperties( obj, {
*     'foo': {
*         'value': 'bar'
*     },
*     'baz': {
*          'value': 13
*     }
* });
*
* var val = obj.foo;
* // returns 'bar'
*
* val = obj.baz;
* // returns 13
*/
function defineProperties( obj, props ) {
	var keys;
	var name;
	var i;

	if ( !isObject( obj ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an object. Value: `%s`.', obj ) );
	}
	if ( !isObject( props ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be an object containing property descriptors. Value: `%s`.', props ) );
	}
	keys = objectKeys( props );
	for ( i = 0; i < keys.length; i++ ) {
		name = keys[ i ];
		defineProperty( obj, name, props[ name ] );
	}
	return obj;
}


// EXPORTS //

module.exports = defineProperties;
