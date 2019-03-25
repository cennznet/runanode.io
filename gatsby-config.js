const activeEnv = process.env.ACTIVE_ENV || process.env.NODE_ENV || 'development';

require('dotenv').config({
  path: `.env.${activeEnv}`,
});

console.log('process.env.NODE_ENV', process.env.NODE_ENV);

module.exports = {
  siteMetadata: {
    title: 'a node wallet that can stake CENNZ tokens',
    description:
      'A highly secure wallet to manage your assets, check your balance, store or transfer tokens. You can also stake CENNZ tokens to participant in the network to ensure that it thrives',
    siteUrl: 'https://runanode.io',
    menuLinks: [
      {
        name: 'Services',
        link: '/services',
      },
      {
        name: 'Team',
        link: '/team',
      },
      {
        name: 'Testimonials',
        link: '/testimonials',
      },
      {
        name: 'Contact',
        link: '/contact',
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        url: 'https://api.github.com/graphql',
        headers: {
          Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
        },
        fetchOptions: {},
      },
    },
    'gatsby-plugin-sass',
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
        name: 'data',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/images`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          src: 'src',
          pages: 'src/pages',
          theme: 'src/theme',
          components: 'src/components',
          scss: 'src/scss',
          images: 'static/images',
        },
        extensions: ['js'],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
        cookieDomain: 'runanode.io',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://runanode.io',
        sitemap: 'https://runanode.io/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
  ],
};
