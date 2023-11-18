/** @type {import('next').NextConfig} */
const path = require('path')
const withPlugins = require("next-compose-plugins");
const withImages = require('next-images');

const {
    createVanillaExtractPlugin
  } = require('@vanilla-extract/next-plugin');
  const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  output: 'export',
  assetPrefix: '/atibcco.com',
  images:{
    formats:['image/webp']
  },
  distDir: 'build',
  sassOptions: {
    includePaths: [path.join(__dirname, 'assets/scss')],
  },
}

module.exports = withPlugins(
  [withImages, withVanillaExtract()],
  nextConfig
);