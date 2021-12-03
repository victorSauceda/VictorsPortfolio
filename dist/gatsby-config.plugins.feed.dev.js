"use strict";

var config = require('./config');

var utils = require('./src/utils');

module.exports = {
  resolve: "gatsby-plugin-feed",
  options: {
    feeds: [{
      serialize: function serialize(_ref) {
        var allMarkdownRemark = _ref.query.allMarkdownRemark;
        return allMarkdownRemark.edges.map(function (_ref2) {
          var node = _ref2.node;
          var siteUrl = config.siteUrl,
              pathPrefix = config.pathPrefix,
              author = config.author;
          var _node$frontmatter = node.frontmatter,
              title = _node$frontmatter.title,
              date = _node$frontmatter.date,
              path = _node$frontmatter.path,
              excerpt = _node$frontmatter.excerpt;
          return Object.assign({}, node.frontmatter, {
            title: title,
            description: excerpt,
            url: utils.resolveUrl(siteUrl, pathPrefix, path),
            guid: siteUrl + path + title,
            date: date,
            author: author,
            custom_elements: [{
              'content:encoded': node.html
            }]
          });
        });
      },
      query: "\n          {\n            allMarkdownRemark(\n              limit: 10,\n              sort: { order: DESC, fields: [frontmatter___date] }\n            ) {\n              edges {\n                node {\n                  html\n                  frontmatter {\n                    title\n                    date\n                    path\n                    excerpt\n                  }\n                }\n              }\n            }\n          }\n        ",
      output: '/rss.xml',
      title: 'Victor Sauceda'
    }]
  }
};