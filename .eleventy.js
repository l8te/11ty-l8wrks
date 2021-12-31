const pluginNavigation = require("@11ty/eleventy-navigation");
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // add plugins
  eleventyConfig.addPlugin(pluginNavigation);

  // https://www.11ty.dev/docs/data-deep-merge/
  eleventyConfig.setDataDeepMerge(true);
  
  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy");
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  });

  eleventyConfig.addWatchTarget("./src/css/")
  eleventyConfig.addWatchTarget("./src/images/")
  eleventyConfig.addPassthroughCopy("./src/css/")
  eleventyConfig.addPassthroughCopy("./src/images/")

  return {
    dir: {
      input: "src",
      output: "public"
    },
    markdownTemplateEngine: "njk"
  }
}