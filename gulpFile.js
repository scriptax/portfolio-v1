const { series, src, dest, watch } = require('gulp');
const purgecss = require('gulp-purgecss');
const sass = require('gulp-sass')(require('sass'))

function buildStyles() {
  return src('./src/styles/index.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
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
    .pipe(dest('./src/styles/build'))
}

function watchTask() {
  watch(['./src/styles/**/*.scss', './src/components/**/*.js'], buildStyles)
}

exports.default = series(buildStyles, watchTask)