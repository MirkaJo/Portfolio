let gulp = require('gulp');
let sass = require('gulp-sass');
sass.compiler = require('node-sass');

gulp.task('hello', function() {
    console.log('Hello Zell');
});

gulp.task('kk', function(){
    return gulp.src('./styles/_style.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('./'))
});

//gulp.task('default', gulp.series(['kk']));
