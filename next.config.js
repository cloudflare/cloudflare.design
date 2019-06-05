const path = require("path")
const fs = require("fs")
const webpack = require("webpack")

const fetchFiles = filePath => {
  const files = fs.readdirSync(filePath)

  return files.reduce((acc, file) => {
    const elName = path.basename(file, ".js")
    return {
      ...acc,
      [elName]: [`${filePath}/${file}`, "default"]
    }
  }, {})
}

module.exports = {
  exportPathMap: async (defaultPathMap, { dev, dir, outDir }) => {
    if (dev) {
      return {
        "/posts/test-post": { page: "/posts/test-post" },
        ...defaultPathMap
      }
    }

    fs.copyFileSync(path.join(dir, "CNAME"), path.join(outDir, "CNAME"))
    return defaultPathMap
  },
  webpack: (config, {}) => {
    const elements = fetchFiles(path.join(__dirname, "elements"))
    const components = fetchFiles(path.join(__dirname, "components"))
    config.plugins.push(
      new webpack.ProvidePlugin(elements),
      new webpack.ProvidePlugin(components)
    )
    config.resolve = {
      alias: {
        ...(config.resolve.alias || {}),
        elements: path.resolve(__dirname, "elements/"),
        components: path.resolve(__dirname, "components/")
      }
    }
    return config
  }
}
