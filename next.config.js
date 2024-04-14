const withMDX = require("@next/mdx")();

module.exports = withMDX({
  output: "export",
  basePath: "/beta-website",
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    unoptimized: true
  }
});