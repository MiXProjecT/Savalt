const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/index.tsx",
    devServer: {
        port: 4100,
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test:/\.bundle\.ts$/,
                use: {
                    loader: "bundle-loader",
                    options: {
                        name: "[name]",
                    }
                }
            },
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node-modules/
            },
            {
                test: /\.(svg|jpg|png|gif)$/,
                exclude: /fonts/,
                use: "file-loader"
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                loader: 'file-loader'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html')
        })
    ],

    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/"
    }

}


// npm i -D @types.ts/node @types.ts/webpack bundle-loader file-loader html-webpack-plugin ts-loader typescript webpack webpack-cli webpack-dev-server
// npm i @types.ts/react @types.ts/react-dom @types.ts/styled-components react react-dom styled-components styled-reset