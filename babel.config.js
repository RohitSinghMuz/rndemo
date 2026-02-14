module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@constants': './app/constants',
          '@assets': './app/assets',
          '@components': './app/components',
          '@screens': './app/screens',
        },
      },
    ],
  ],
};
