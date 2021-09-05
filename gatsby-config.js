module.exports = {
  siteMetadata: {
    title: `Camylle Azevedo - Psicóloga`,
    titleTemplate: `%s | Camylle Azevedo`,
    description: `Site da psicóloga infantil, Camylle Azevedo`,
    twitterUsername: `@teufel8`,
    url: `https://www.camylleazevedo.com.br/`,
    image: `/images/Capa4.jpg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
