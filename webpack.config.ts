import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config:webpack.Configuration = {
  mode:'development',
  resolve:{
    extensions:['.ts','.tsx','.js']
  },
  module:{
    rules:[
      // ts resolve config
      {
        test:/\.tsx?$/,
        exclude:/node_modules/,
        use:[
          {
            loader:'ts-loader',
          }
        ]
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./src/index.html'
    })
  ]
}

export default config;