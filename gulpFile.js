const { series, src, dest } = require('gulp');
const purgecss = require('gulp-purgecss');

function prgcss() {
  return src('./src/styles/index.css')
    .pipe(purgecss({
      content: ['./src/components/**/*.js'],
      safelist: {
        standard: [
          /-primary-?/,
          /-secondary-?/,
          /-error-?/,
          /-purple-?/,
          /-info-?/,
          /-blue-?/,
          /-green-?/,
        ]
      }
    }))
    .pipe(dest('./src/styles/'))
}

exports.default = series(prgcss)