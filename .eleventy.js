const fs = require('fs');

function getSvgContent(file) {
    let relativeFilePath = `./src/images/svg/${file}.svg`;
    let data = fs.readFileSync(relativeFilePath, 
    function(err, contents) {
        if (err) return err
        return contents
    });

    return data.toString('utf8');
}

module.exports = function(eleventyConfig) {

    eleventyConfig.addWatchTarget("./src/sass/");
    eleventyConfig.addPassthroughCopy("./src/images");
    eleventyConfig.addPassthroughCopy("./src/scripts/");

    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
    eleventyConfig.addShortcode("svg", getSvgContent);
    

    return {
      dir: {
        input: "src",
        output: "dist"
      }
    }
  };