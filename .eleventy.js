module.exports = function(config) {
  // Activate deep merge for data cascade
  config.setDataDeepMerge(true);

  // Plugins
  // config.addPlugin(eleventyNavigationPlugin);
  // config.addPlugin(syntaxHighlight);
  // config.addPlugin(pluginRss);
  // config.addPlugin(readingTime);

  // Copy assets
  config.addPassthroughCopy("src/fonts");
  config.addPassthroughCopy("src/images");
  config.addPassthroughCopy({
    "src/_includes/assets/css/styles.css": "./styles.css",
  });
  // config.addPassthroughCopy("src/blog/**/*.{gif}");
  // config.addPassthroughCopy("src/favicon*");
  // config.addPassthroughCopy("src/robots.txt");
  // config.addPassthroughCopy("src/_headers");

  // Code transforms
  // config.addTransform("htmlmin", htmlMinTransform);

  // let markdownIt = require("markdown-it");
  // let mdAnchor = require("markdown-it-anchor");

  // let options = {
  //   html: true,
  //   xhtmlOut: true,
  //   breaks: true,
  //   linkify: false,
  //   typographer: true,
  // };

  // const md = markdownIt(options)
  //   .use(mdAnchor, {
  //     permalink: mdAnchor.permalink.linkAfterHeader({
  //       style: "visually-hidden",
  //       class: "headerAnchor__link",
  //       assistiveText: (title) => `Permalink to “${title}”`,
  //       visuallyHiddenClass: "visually-hidden",
  //       wrapper: ['<div class="headerAnchor__wrapper">', "</div>"],
  //     }),
  //   })
  //   .use(require("markdown-it-toc-done-right"), {
  //     containerClass: "toc",
  //   })
  //   .use(require("markdown-it-kbd"))
  //   .use(require("markdown-it-abbr"))
  //   .use(require("markdown-it-playground"))
  //   .use(require("markdown-it-footnote"));
  //
  // md.renderer.rules.footnote_block_open = () =>
  //   '<section class="footnotes" aria-label="Footnotes">\n' +
  //   '<ol class="footnotes-list">\n';
  //
  // // Markdown Parsing
  // config.setLibrary("md", md);

  // config.setBrowserSyncConfig({
  //   callbacks: {
  //     ready: function (err, bs) {
  //       bs.addMiddleware("*", (req, res) => {
  //         const content_404 = fs.readFileSync("_site/404.html");
  //         // Add 404 http status code in request header.
  //         res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
  //         // Provides the 404 content without redirect.
  //         res.write(content_404);
  //         res.end();
  //       });
  //     },
  //   },
  // });

  // You can return your Config object (optional).
  return {
    dir: {
      input: "src",
    },
    templateFormats: ["njk", "md", "html", "11ty.js"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true,
  };
};
