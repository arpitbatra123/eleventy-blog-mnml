module.exports = eleventyConfig => {
  eleventyConfig.addPassthroughCopy("styles");

  return {
    //Use ejs in html templates
    htmlTemplateEngine: "ejs"
  };
};
