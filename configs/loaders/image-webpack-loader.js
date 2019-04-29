module.exports = () => {
  return {
    loader: 'image-webpack-loader',
    options: {
      mozjpeg: {
        progressive: true,
        quality: 65,
      },
      optipng: {
        enabled: false,
      },
      pngquant: {
        quality: '65-90',
        speed: 4,
      },
      gifsicle: {
        interlaced: false,
      },
      webp: {
        quality: 75,
      },
    },
  };
};
