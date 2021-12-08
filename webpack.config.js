const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    output: {
        filename: 'app.bundle.js',
        publicPath:'/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],
    module: {
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env','@babel/preset-react']
                    }
                }
            },
            {
                test: /\.(jpe?g|gif|png|svg)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 10000
                    }
                  }
                ]
              }
        ]
    }
}