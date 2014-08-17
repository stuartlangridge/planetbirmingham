var gulp  = require('gulp'),
  shell = require('gulp-shell');

gulp.task('update', shell.task([
  'python ./venus/planet.py birminghamio.ini'
]));

gulp.task('build', shell.task([
  'python ./venus/planet.py -o birminghamio.ini'
]));

gulp.task('watch', function () {
  gulp.watch('templates/birminghamio/*', ['build'])
});

gulp.task('default', ['watch']);