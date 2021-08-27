const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config) => {
    config.resolve.alias['@/'] = path.resolve(__dirname, '../src');
    config.resolve.alias['@components'] = path.resolve(__dirname, '../src/components');
    config.resolve.alias['@hooks'] = path.resolve(__dirname, '../src/hooks');
    config.resolve.alias['@contexts'] = path.resolve(__dirname, '../src/contexts');
    config.resolve.alias['@interfaces'] = path.resolve(__dirname, '../src/interfaces');
    config.resolve.alias['@item-types'] = path.resolve(__dirname, '../src/item-types');
    config.resolve.alias['@pages'] = path.resolve(__dirname, '../src/pages');
    config.resolve.alias['@stores'] = path.resolve(__dirname, '../src/stores');
    return config;
  },
  previewHead: (head) => (`
    ${head}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  `)
}