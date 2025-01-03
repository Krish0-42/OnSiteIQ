const path = require('path');

module.exports = {
    resolve: {
        fallback: {
            http: require.resolve('stream-http'),
            https: require.resolve('https-browserify'),
            util: require.resolve('util/'),
            zlib: require.resolve('browserify-zlib'),
            stream: require.resolve('stream-browserify'),
            url: require.resolve('url/'),
            assert: require.resolve('assert/')
        }
    },
    // Optional: Define entry and output if necessary
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
};
