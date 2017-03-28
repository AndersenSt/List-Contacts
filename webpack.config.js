'use strict';

const path = require('path');

module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'react-hot-loader' },
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'react', 'stage-2']
                        }
                    }
                ]
            }
        ]
    },

    devtool: 'source-map',

    devServer: {
        historyApiFallback: true
    },
    
    resolve: {
        extensions: ['.js', '.jsx', '.json', '*']
    }
};