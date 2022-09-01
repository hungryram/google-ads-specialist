module.exports = {
  siteMetadata: {
    title: `new-sanity-gatsby-frame`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-sanity',
    options: {
      "projectId": "9od8f3bu",
      "dataset": "production"
    }
  },
  {
    resolve: "gatsby-plugin-google-gtag",
    options: {
      trackingIds: [
        "UA-237226153-1",
        "G-0N12H7T8Y4"
      ],
      pluginConfig: {
        head: true
      },
    }
  }, "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", "gatsby-plugin-postcss", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};