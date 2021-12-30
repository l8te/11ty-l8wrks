module.exports = function(eleventyConfig) {

  // Add filter
  // dates are off by 1 day
  eleventyConfig.addFilter("dateDisplay", require("./src/_filters/dates.js") );

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