const withMDX = require("@next/mdx")();

module.exports = withMDX({
  output: "export",
  basePath: "",
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    unoptimized: true
  },
  trailingSlash: true
});