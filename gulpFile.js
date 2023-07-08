const { series, src, dest } = require('gulp');
const purgecss = require('gulp-purgecss');

function prgcss() {
  return src('./src/styles/index.css')
    .pipe(purgecss({
      content: ['./src/components/**/*.js'],
      safelist: {
        standard: [
          /bg-(?!.*-dark)\w+/, 
          /text-(?!.*-dark-)\w+/,
          /seperator-border-/,
          /btn-outlined/,
          /heading-bullet-/,
          /inpt-/,
          /link-/,
          /list-bullet-/,
        
        ]
      }
    }))
    .pipe(dest('./src/styles/'))
}

exports.default = series(prgcss)