"use strict";

var config = require('./config');

var plugins = require('./gatsby-config.plugins');

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    // Data used by some gatsby plugins
    siteUrl: config.siteUrl,
    title: config.siteTitle,
    description: config.siteDescription
  },
  plugins: plugins
};