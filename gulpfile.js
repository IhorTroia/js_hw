const { src, dest, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

const buildStyles = () => {
  return src('dist/scss/**/*.scss')
    .pipe(sass())
    .pipe(dest('build/style/'));
};

const htmlCopy = () => {
  return src('dist/pages/*.html')
    .pipe(dest('build/pages/'));
};

const jsMinify = () => {
  return src('dist/js/*js')
    .pipe(concat('js.min.js'))
    .pipe(uglify())
    .pipe(dest('build/js/'));
};

exports.build = parallel(buildStyles, htmlCopy, jsMinify);