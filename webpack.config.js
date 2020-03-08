const path = require('path')

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'main.js'
    },
    module: {
        rules:[
            {
                test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/
            },
            {
                test: /\.css$/, use: ['style-loader', 'css-loader']
            }
        ]
    }
}