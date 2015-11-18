var gulp = require('gulp');
var glue = require('gulp-glue');

gulp.task('icon', function () {
  return gulp
    .src('src/icons/*.*')
    .pipe(glue({
      source: './src/icons',
      output: './build',
      less: './build',
      retina: true,
      force: true,
      'less-template': './src/less.jinja',
      html: './html',
      css: './build'
    }))
})