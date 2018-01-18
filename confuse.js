/**
 * by Hope_pdm
 * instruction：混淆js
 */

var fs = require( 'fs' ),
    UglifyJS = require( 'uglify-js' ), //混淆js
    path = require( 'path' );

fs.writeFileSync( 'dist/main.min.js', UglifyJS.minify( {
    'file1.js': fs.readFileSync( 'dist/main.min.js', 'utf8' )
}, {
    mangle: {
        properties: true
    }
} ).code, 'utf8' );