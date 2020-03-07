class CopyrightWebpackPlugin {
  constructor(options) {
    console.log(options)
  }

  apply(compiler) {
    compiler.hooks.compile.tap('CopyrightWebpackPlugin', (compilation) => {
      console.log('compiling...')
    })

    compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin', (compilation, cb) => {
      debugger;
      console.log(compilation.assets)
      compilation.assets['copyright.txt'] = {
        source: function() {
          return 'copyright by cyc'
        },
        size: function() {
          return 16
        }
      }
      cb()
    })
  }
}

module.exports = CopyrightWebpackPlugin