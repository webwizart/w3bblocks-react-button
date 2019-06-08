var path = require('path');
module.exports = {
    mode: 'development',
    entry: './src/w3bButton.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'w3bButton.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules|bower_components|build)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    },
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loaders: ['style-loader', 'css-loader'],
            }
        ]
    }
    // removed as sugested at https://stackoverflow.com/questions/45818937/webpack-uncaught-referenceerror-require-is-not-defined
};