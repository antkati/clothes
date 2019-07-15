const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: "./src/js/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js"
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }      
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new HtmlWebpackPlugin({ 
      filename: "category_all.html", 
      template: "./src/category_all.html"
    }),
    new HtmlWebpackPlugin({ 
      filename: "category.html", 
      template: "./src/category.html"
    }), 
    new HtmlWebpackPlugin({ 
      filename: "product.html", 
      template: "./src/product.html"
    }),   
    new HtmlWebpackPlugin({ 
      filename: "search_result.html", 
      template: "./src/search_result.html"
    }), 
    new HtmlWebpackPlugin({ 
      filename: "shopping_cart.html", 
      template: "./src/shopping_cart.html"
    }),  
    new HtmlWebpackPlugin({ 
      filename: "shopping_cart__cut.html", 
      template: "./src/shopping_cart__cut.html"
    }),              
    new CopyPlugin([
      { from: './src/css', to: './css' },
      { from: './src/fonts', to: './fonts' },
      { from: './src/images', to: './images' }
    ])
  ]
};