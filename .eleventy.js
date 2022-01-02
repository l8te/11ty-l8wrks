const pluginNavigation = require('@11ty/eleventy-navigation');
const { DateTime } = require('luxon');

module.exports = function(eleventyConfig) {
  // add plugins
  eleventyConfig.addPlugin(pluginNavigation);

  // https://www.11ty.dev/docs/data-deep-merge/
  eleventyConfig.setDataDeepMerge(true);
  
  eleventyConfig.addFilter('readableDate', dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('dd LLL yyyy');
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  });

  // setting up tags
  function filterTagList(tags) {
    return (tags || []).filter(tag => ['all', 'nav', 'post', 'posts', 'projects', 'arts', 'brags'].indexOf(tag) === -1);
  }

  eleventyConfig.addFilter('filterTagList', filterTagList)

  // Create an array of all tags
  eleventyConfig.addCollection('tagList', function(collection) {
    let tagSet = new Set();
    collection.getAll().forEach(item => {
      (item.data.tags || []).forEach(tag => tagSet.add(tag));
    });

    return filterTagList([...tagSet]);
  });

  // shortcode for year in footer
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  eleventyConfig.addWatchTarget('./src/css/')
  eleventyConfig.addWatchTarget('./src/images/')
  eleventyConfig.addPassthroughCopy('./src/css/')
  eleventyConfig.addPassthroughCopy('./src/images/')

  return {
    dir: {
      input: 'src',
      output: 'public'
    },
    markdownTemplateEngine: 'njk'
  }
}