var gulp = require('gulp'),
    livereload = require('gulp-livereload'), // auto-reload browser when files are changed
    wiredep = require('wiredep').stream,
    gutil = require('gulp-util'),
    connect = require('gulp-connect'), // run a local dev server
    inject = require('gulp-inject'), // inject app dependency includes on index.html
    open = require('gulp-open'); // open a URL in the browser

var jsSources = ['src/app/**/*.js'],
    cssSources = ['src/app/**/*.css'],
    htmlSources = ['src/**/*.html'];


// Watch
gulp.task('watch', function() {
    gulp.watch(jsSources, ['js']);
    gulp.watch(cssSources, ['css']);
    gulp.watch(htmlSources, ['html']);
});

var paths = ['./src/bower_components/', './src/app/**/*.js', './src/app/**/*.css'];


gulp.task('injectables', function() {
    var sources = gulp.src(paths, { read: false });
    return gulp.src('./src/index.html')
        .pipe(wiredep())
        .pipe(inject(sources, { relative: true }))
        .pipe(gulp.dest('./src'));
});

gulp.task('js', function() {
    gulp.src(jsSources)
        .pipe(connect.reload())
});

gulp.task('html', function() {
    gulp.src(htmlSources)
        .pipe(connect.reload())
});

gulp.task('css', function() {
    gulp.src(cssSources)
        .pipe(connect.reload())
});

gulp.task('connect', function() {
    connect.server({
        root: './src',
        livereload: true
    })
});

gulp.task('app', function() {
    var options = {
        uri: 'http://localhost:8080',
        app: 'Chrome'
    };
    gulp.src('./src/index.html')
        .pipe(open(options));
});


gulp.task('serve', ['connect', 'watch', 'injectables', 'app']);