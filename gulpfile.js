let gulp         = require('gulp'),
    browserify   = require('browserify'),
    source       = require('vinyl-source-stream'),
    gutil        = require('gulp-util'),
    buffer       = require('vinyl-buffer'),
    uglify       = require('gulp-uglify'),
    sourcemaps   = require('gulp-sourcemaps'),
    less         = require('gulp-less')
    cssmin       = require('gulp-cssmin'),
    path         = require('path'),
    rename       = require('gulp-rename')
    autoprefix   = require('less-plugin-autoprefix');

/**
 *  Javascript
 */
gulp.task('js', () => {
    return browserify({
        entries: './src/js/main.js',
        debug: true
    })

    .bundle()

    .pipe(source('bundle.min.js'))

    .pipe(buffer())

    .pipe(sourcemaps.init({loadMaps: true}))

    .pipe(uglify()).on('error', gutil.log)

    .pipe(sourcemaps.write())

    .pipe(gulp.dest('./public/assets/js/'));
});

/**
 * Compile LESS
 */
gulp.task('less', () => {
    let prefix = new autoprefix({
        browsers: ['last 10 versions']
    });

    return gulp.src('./src/less/main.less')
        .pipe(sourcemaps.init())

        .pipe(less({
            plugins: [prefix],
            paths: [ path.join(__dirname, 'src', 'less', 'includes') ]
        }))
        .on('error', err => console.log(err))

        .pipe(rename({
            suffix: '.min'
        }))

        .pipe(cssmin().on('error', err => console.log(err)))

        .pipe(sourcemaps.write())

        .pipe(gulp.dest('./public/assets/css'));
});

gulp.task('default', ['js', 'less'], () => {
    gulp.watch('./src/**/*.js', ['js']);
    gulp.watch('./src/**/*.less', ['less']);
});