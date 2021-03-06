const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
/* const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; */

module.exports = {
  entry: {
    index: "./src/js/index.js",
    catalog: "./src/js/catalog.js",
    searchResult: "./src/js/searchResult.js",
    cart: "./src/js/cart.js",
    product: "./src/js/product.js"
  },
  optimization: {
    runtimeChunk: {
      name: entrypoint => `runtime-${entrypoint.name}`
    },
    splitChunks: {
      maxInitialRequests: Infinity,
      minSize: 0,      
      cacheGroups: {
        'vendor-slick-carousel': {
          name: 'vendor-slick-carousel',
          test: /[\\/]node_modules[\\/]slick-carousel[\\/]/,
          chunks: 'initial',
          priority: 2
        },        
        'vendor-jquery': {
          name: 'vendor-jquery',
          test: /[\\/]node_modules[\\/]jquery[\\/]/,
          chunks: 'initial',
          priority: 2
        },  
        'vendor-react-modal': {
          name: 'vendor-react-modal',
          test: /[\\/]node_modules[\\/]react-modal[\\/]/,
          chunks: 'initial',
          priority: 2
        },    
        'vendor-react-select': {
          name: 'vendor-react-select',
          test: /[\\/]node_modules[\\/]react-select[\\/]/,
          chunks: 'initial',
          priority: 2
        }, 
        'vendor-react-slick': {
          name: 'vendor-react-slick',
          test: /[\\/]node_modules[\\/]react-slick[\\/]/,
          chunks: 'initial',
          priority: 2
        },
        'vendor-react-input-mask': {
          name: 'vendor-react-input-mask',
          test: /[\\/]node_modules[\\/]react-input-mask[\\/]/,
          chunks: 'initial',
          priority: 2
        },                                
        'vendor-react': {
          name: 'vendor-react',
          test: /[\\/]node_modules[\\/]react-?((?!select)(?!slick)(?!modal)(?!input\-mask).)*?[\\/]/,
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
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }      
    ]
  },
  plugins: [  
    new HtmlWebpackPlugin({
      filename: "index.html", 
      template: "./src/index.html",
      inject: "body",
      chunks: ['index', 'vendor-react-modal', 'vendor-react', 'vendor-all', 'runtime-index']
    }),
    new HtmlWebpackPlugin({ 
      filename: "category_all.html", 
      template: "./src/category_all.html",
      inject: "body",
      chunks: ['index', 'vendor-react-modal', 'vendor-react', 'vendor-all', 'runtime-index']
    }),
    new HtmlWebpackPlugin({ 
      filename: "category.html", 
      template: "./src/category.html",
      inject: "body",
      chunks: ["catalog", "index", 'vendor-react-select', 'vendor-react-modal', 'vendor-react', 'vendor-all', 'runtime-catalog', 'runtime-index']
    }), 
    new HtmlWebpackPlugin({ 
      filename: "product.html", 
      template: "./src/product.html",
      inject: "body",
      chunks: ["product", "index", 'vendor-react-slick', 'vendor-slick-carousel', 'vendor-jquery', 'vendor-react-modal', 'vendor-react', 'vendor-all', 'runtime-product', 'runtime-index']
    }),   
    new HtmlWebpackPlugin({ 
      filename: "search_result.html", 
      template: "./src/search_result.html",
      inject: "body",
      chunks: ["searchResult", "index", 'vendor-react-select', 'vendor-react-modal', 'vendor-react', 'vendor-all', 'runtime-searchResult', 'runtime-index']
    }), 
    new HtmlWebpackPlugin({ 
      filename: "shopping_cart.html", 
      template: "./src/shopping_cart.html",
      inject: "body",
      chunks: ["cart", "index", 'vendor-react-input-mask', 'vendor-react-select', 'vendor-react-modal', 'vendor-react', 'vendor-all', 'runtime-cart', 'runtime-index']      
    }),  
    new HtmlWebpackPlugin({ 
      filename: "shopping_cart__cut.html", 
      template: "./src/shopping_cart__cut.html",
      inject: "body",
      chunks: ["index", 'vendor-react-modal', 'vendor-react', 'vendor-all', 'runtime-index']
    }),              
    new CopyPlugin([
      { from: './src/css', to: './css' },
      { from: './src/fonts', to: './fonts' },
      { from: './src/images', to: './images' }
    ])
  ]
};