const { getDefaultConfig } = require('@expo/metro-config')
const defaultConfig = getDefaultConfig(__dirname)

defaultConfig.resolver.extraNodeModules = {
  crypto: require.resolve("crypto-browserify"),
  events: require.resolve("events"),
  stream: require.resolve("stream-browserify"),
  fs: require.resolve("react-native-fs"),
  path: require.resolve("path-browserify")
}

module.exports = defaultConfig
