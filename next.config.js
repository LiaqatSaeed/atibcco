/** @type {import('next').NextConfig} */
const path = require('path')
const {
    createVanillaExtractPlugin
  } = require('@vanilla-extract/next-plugin');
  const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'assets/scss')],
  },
}


module.exports = withVanillaExtract(nextConfig);
