const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: "./src/js/index.js",
    catalog: "./src/js/catalog.js",
    searchResult: "./src/js/searchResult.js"
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: '[name].bundle.js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        'vendor-react': {
          name: 'vendor-react',
          test: /[\\/]node_modules[\\/]react.*?[\\/]/,
          chunks: 'initial',
          priority: 2
        },
        'vendor-all': {
          name: 'vendor-all',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
          priority: 1
        }
      }
    }
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
      filename: "index.html", 
      template: "./src/index.html",
      inject: "body",
      chunks: ['index', 'vendor-react', 'vendor-all']
    }),
    new HtmlWebpackPlugin({ 
      filename: "category_all.html", 
      template: "./src/category_all.html",
      inject: "body",
      chunks: ['index', 'vendor-react', 'vendor-all']
    }),
    new HtmlWebpackPlugin({ 
      filename: "category.html", 
      template: "./src/category.html",
      inject: "body",
      chunks: ["catalog", "index", 'vendor-react', 'vendor-all']
    }), 
    new HtmlWebpackPlugin({ 
      filename: "product.html", 
      template: "./src/product.html",
    }),   
    new HtmlWebpackPlugin({ 
      filename: "search_result.html", 
      template: "./src/search_result.html",
      inject: "body",
      chunks: ["searchResult", "index", 'vendor-react', 'vendor-all']
    }), 
    new HtmlWebpackPlugin({ 
      filename: "shopping_cart.html", 
      template: "./src/shopping_cart.html",
      inject: "body",
      chunks: ["index", 'vendor-react', 'vendor-all']      
    }),  
    new HtmlWebpackPlugin({ 
      filename: "shopping_cart__cut.html", 
      template: "./src/shopping_cart__cut.html",
      inject: "body",
      chunks: ["index", 'vendor-react', 'vendor-all']
    }),              
    new CopyPlugin([
      { from: './src/css', to: './css' },
      { from: './src/fonts', to: './fonts' },
      { from: './src/images', to: './images' }
    ])
  ]
};