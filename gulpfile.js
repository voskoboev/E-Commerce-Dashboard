const { src, dest, parallel, series, watch } = require('gulp')
const browserSync = require('browser-sync').create()
const concat = require('gulp-concat')
const babel = require('gulp-babel')
// const uglify = require('gulp-uglify-es').default
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const cleancss = require('gulp-clean-css')
const imagemin = require('gulp-imagemin')
const newer = require('gulp-newer')
const del = require('del')

const browsersync = () => {
  browserSync.init({
    server: { baseDir: 'src/' },
    notify: false,
    online: false
  })
}

const scripts = () => {
  return src([
    'src/js/index.js'
  ])
    .pipe(concat('bundle.min.js'))
    // .pipe(uglify())
    .pipe(babel({
      presets: ['@babel/env']
  }))
    .pipe(dest('src/js/'))
    .pipe(browserSync.stream())
}

const styles = () => {
  return src([
    'node_modules/normalize.css/normalize.css',
    'src/scss/bundle.scss'
  ])
    .pipe(sass())
    .pipe(concat('bundle.min.css'))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 10 versions'],
        grid: true
      })
    )
    .pipe(
      cleancss({
        level: { 1: { specialComments: 0 } }
      })
    )
    .pipe(dest('src/css/'))
    .pipe(browserSync.stream())
}

const images = () => {
  return src('src/images/**/*')
    .pipe(newer('src/images/'))
    .pipe(imagemin())
    .pipe(dest('src/images/'))
}

const cleanimg = () => {
  return del('src/images/**/*', { force: true }) 
}

const fonts = () => {
  return src('src/fonts/**/*')
    .pipe(dest('src/fonts/'))
}

const cleandist = () => {
  return del('dist/**/*', { force: true })
}

const buildcopy = () => {
  return src(
    [
      'src/css/**/*.min.css',
      'src/js/**/*.min.js',
      'src/images/**/*',
      'src/fonts/**/*',
      'src/**/*.html'
    ],
    { base: 'src/' }
  )
    .pipe(dest('dist'))
}

const startWatch = () => {
  watch('src/**/*.html').on('change', browserSync.reload)
  watch('src/**/*.scss', styles)
  watch(['src/**/*.js', '!src/**/*.min.js'], scripts)
  watch('src/images/**/*', images)
  watch('src/fonts/**/*', fonts)
}

exports.browsersync = browsersync
exports.scripts = scripts
exports.styles = styles
exports.images = images
exports.fonts = fonts
exports.cleanimg = cleanimg
exports.cleandist = cleandist

exports.build = series(
  cleandist,
  styles,
  scripts,
  images,
  fonts,
  buildcopy
  )

exports.default = parallel(
  styles,
  scripts,
  browsersync,
  startWatch
  )
