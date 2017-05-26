/**
 * @author: @AngularClass
 */
import webpack from "webpack";
import path from "path";
import LodashModuleReplacementPlugin from "lodash-webpack-plugin";

const BASE_DIR = path.join(__dirname, "");
export const METADATA = {
  title: "ionic2 font awesome",
  baseUrl: "/"
};
export const config = {
  // metadata: METADATA,
  profile: true,
  entry: [
    path.join(BASE_DIR, "src", "fontawesome.module.ts"),
    path.join(BASE_DIR, "src", "fontawesome.directive.ts"),
    path.join(BASE_DIR, "src", "fontawesome.directive.scss"),
    path.join(BASE_DIR, "src", "index.ts")
  ],
  output: {
    path: BASE_DIR,
    filename: "ionic2-font-awesome.bundle.js"
  },
  performance: {
    hints: false
  },
  /*
   * Options affecting the resolving of modules.
   *
   * See: http://webpack.github.io/docs/configuration.html#resolve
   */
  resolve: {
    // root: path.join(BASE_DIR, "assets"),
    extensions: [".ts", ".tsx", ".js", ".jsx", ".babel.js", ".es6", ".html"]
  },
  module: {
    loaders: [{
      test: /\.woff2?(\?v=[0-9]\.[.0-9]*)?$/,
      loader: "url-loader?limit=10000&minetype=application/font-woff&name=[name].[ext]"
    }, {
      test: /\.ttf(\?v=[0-9]\.[.0-9]*)?$/,
      loader: "url-loader?limit=10000&minetype=application/octet-stream&name=[name].[ext]"
    }, {
      test: /\.eot?(\?v=[0-9]\.[.0-9]*)?$/,
      loader: "file-loader?name=[name].[ext]"
    }, {
      test: /\.ts(x?)$/,
      loader: "awesome-typescript-loader",
      include: [
        path.join(BASE_DIR, "assets"),
        path.join(BASE_DIR, "node_modules", "angular-pipes", "src"),
        path.join(BASE_DIR, "node_modules", "angular2-notifications", "src")
      ]
    }, {
      test: [/\.es6$/, /(\.babel?).js(x?)$/],
      loader: "babel-loader",
      include: [
        path.join(BASE_DIR, "assets"),
        path.join(BASE_DIR, "api"),
        path.join(BASE_DIR, "views")
      ]
    }, {
      test: /\.json$/,
      loader: "json-loader"
    }, {
      test: [/\.scss$/, /\.sass$/],
      loaders: ["style-loader", "css-loader", "sass-loader"]
    }, {
      test: [/\.jpe?g$/, /\.png$/, /\.gif$/, /\.svg$/, /\.ico$/],
      loaders: [
        "file-loader?hash=sha512&digest=hex&name=[name].[ext]",
        {
          loader: "image-webpack-loader",
          query: {
            progressive: true,
            optipng: {
              optimizationLevel: 7
            },
            gifsicle: {
              interlaced: false
            },
            pngquant: {
              quality: "65-90",
              speed: 4
            }
          }
        }
      ]
    }, {
      test: /\.html$/,
      loader: "html-loader"
      // exclude: [path.join(BASE_DIR, "assets", "src", "index.html")]
    }]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      // test: /\.xxx$/, // may apply this only for some modules
      minimize: true
    }),
    new webpack.ProvidePlugin({
      "_": "lodash",
      "jQuery": "jquery",
      "jquery": "jquery",
      "window.jquery": "jquery",
      "Tether": "tether",
      "window.Tether": "tether"
    }),
    new LodashModuleReplacementPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(true)
  ],
  node: {
    global: true,
    crypto: "empty",
    fs: "empty",
    module: false,
    clearImmediate: false,
    setImmediate: false
  }
};
