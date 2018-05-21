var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync')

;

gulp.task('css', function () {

    return gulp.src('./css/style.css')
        .pipe(plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(autoprefixer({
            browsers: ['last 3 versions', "IE 9"],
        }))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});

gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

});
gulp.task('watch', function () {
    gulp.watch('./css/style.css', ['css']);
    gulp.watch(['./index.html', './css/style.css', './js/**/*.js'], browserSync.reload);
});

gulp.task('default', ['css', 'server', 'watch']);