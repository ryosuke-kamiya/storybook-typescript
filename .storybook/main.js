const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/Index.tsx',
  output: {
    filename: 'bundle/main.[chunkhash].js',
    path: path.resolve('public'),
    publicPath: '/public'
  },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  webpackFinal(config){//storybookはデフォルトでTSに対応していないので、これを追記するひつようがある。
    config.module.rules.push({
      test: /\.tsx?$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
          options: {
            transpileOnly: true
          }
        }
      ]
    })

    config.resolve.extensions.push('.ts', '.tsx');

    return config;
  }
}
