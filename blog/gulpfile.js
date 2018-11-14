var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('src/assets/scss/main.scss').pipe(sass()).pipe(gulp.dest('src/assets/css'));
});


gulp.task('watch', function () {
    gulp.watch('src/assets/scss/**/*.scss', ['sass']);
});