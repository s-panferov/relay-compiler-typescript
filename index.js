const typescript = require('typescript')

/**
 * @param {string} baseDir 
 * @return {(text: string) => string} transformation
 */
module.exports.default = function transform(baseDir) {
   return (filename, text) => {
      return typescript.transpileModule(text, {
         fileName: filename,
         reportDiagnostics: false,
         compilerOptions: {
            target: typescript.ScriptTarget.ES2016
         }
      }).outputText
   }
}