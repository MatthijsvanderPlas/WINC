const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/images/[name][ext]'
    },

    devtool: 'eval-source-map',
    devServer: {
        static: './dist',
    },

    module: {

        rules: [
            {
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },

            {
                test: /\.(gif|png|jpe?g)$/,
                type: "asset/resource",
            },
            

            {
                test:/\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    }
                ]
            },

            {
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                type: 'asset/resource',
                generator: {
                  //publicPath: '../fonts/',
                  filename: 'compiled/fonts/[hash][ext][query]'
                }
             },
        ]
    },

    plugins: [
        
        new HtmlWebpackPlugin({
            inject: 'body',
            template: './src/index.html',
            filename: 'index.html'
        })

    ]
};