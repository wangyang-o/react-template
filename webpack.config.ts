// 告诉 Node.js 使用 TypeScript 来解析该文件
require('ts-node').register();
const path = require('path');
import { Configuration } from 'webpack';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

type Config = Configuration & DevServerConfiguration;
const isProduction = process.env.NODE_ENV === 'production';
const config: Config = {
  mode: isProduction ? 'production' : 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash:4].js',
    chunkFilename: 'chunk/[name].chunk.[chunkhash:4].js',
    publicPath: '/',
    clean: true,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
    splitChunks: {
      filename: '[name]/[name].chunk.js',
      cacheGroups: {
        react: {
          name: 'react',
          test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
          chunks: 'all',
        },
        common: {
          name: 'common',
          chunks: 'all',
          minChunks: 2,
          priority: -10,
        },
      },
    },
  },
  resolve: {
    // 自动解析扩展名
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@src': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(scss|css)$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]_[hash:base64:5]',
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new ESLintPlugin({
      fix: true, // 自动修复问题
      exclude: '/node_modules/',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      sourceMap: true,
    }),
    isProduction &&
      new MiniCssExtractPlugin({
        filename: 'styles/[name].css',
        chunkFilename: 'styles/[name].[chunkhash:4].css',
      }),
  ].filter(Boolean),
  devtool: 'source-map',
  devServer: {
    compress: true,
    historyApiFallback: true,
    hot: true,
    port: 3000,
    client: {
      overlay: false,
      progress: true,
    },
  },
};
export default config;
