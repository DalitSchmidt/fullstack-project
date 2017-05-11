const gulp        = require('gulp')
const browserify  = require('browserify')
const babelify    = require('babelify')
const source      = require('vinyl-source-stream')
const buffer      = require('vinyl-buffer')
const sourcemaps  = require('gulp-sourcemaps')
const livereload  = require('gulp-livereload')

gulp.task('build', () => {
    // app.js is your main JS file with all your module inclusions
    return browserify({entries: './src/index.js', debug: true})
        .transform("babelify", { presets: ["es2015"] })
        .bundle()
        .pipe(source('index.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(livereload())
});

gulp.task('watch', ['build'], () => {
    livereload.listen({port:8080})
    gulp.watch('./src/*.js', ['build'])
});

gulp.task('default', ['watch'])