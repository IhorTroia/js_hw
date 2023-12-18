const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

const buildStyles = () => {
  return src('dist/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(dest('build/styles'))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('./'))
    .pipe(dest('build/styles'))
    .pipe(browserSync.stream());
};

const buildPug = () => {
  return src('dist/pages/*.pug')
    .pipe(pug())
    .pipe(dest('build/'))
    .pipe(browserSync.stream());
};

const htmlCopy = () => {
  return src('dist/pages/*.html')
    .pipe(dest('build/'));
};

const jsMinify = () => {
  return src('dist/js/*js')
    .pipe(concat('js.min.js'))
    .pipe(uglify())
    .pipe(dest('build/js/'));
};

const browserSyncJob = () => {
  browserSync.init({
    server: 'build/',
  });

  watch('dist/scss/**/*.scss', buildStyles);
  watch('dist/pages/*.pug', buildPug);
  watch('dist/pages/*.html', htmlCopy);
  watch('dist/js/*js', jsMinify);
};

exports.server = browserSyncJob;