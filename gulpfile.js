// Initialize modules
// Importing specific gulp API functions lets us write them below as series() instead of gulp.series()
const { src, dest, watch, series, parallel } = require('gulp');
// Importing all the Gulp-related packages we want to use
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const svgSprite = require('gulp-svg-sprite');
var gulp = require('gulp');
var replace = require('gulp-replace');


// File paths
const files = {
    scssPath: 'src/**/*.scss',
    jsPath: 'src/**/*.js'
};

// Sass task: compiles the style.scss file into style.css
function scssTask(){
    return src( /*files.scssPath*/
        ['src/styles-reset.scss',
            'src/fonts.scss',
            'src/global.scss',
            files.scssPath
        ])
        .pipe(sourcemaps.init()) // initialize sourcemaps first
        .pipe(sass()) // compile SCSS to CSS
        .pipe(concat('style.css'))
        .pipe(dest('build')
    ); // put final CSS in build folder
}

// JS task: concatenates and uglifies JS files to script.js
function jsTask(){
    return src([
        files.jsPath
        //,'!' + 'includes/js/jquery.min.js', // to exclude any specific files
        ])
        .pipe(concat('all.js'))
        //.pipe(uglify())
        .pipe(dest('build')
    );
}

function svgTask() {

    config = {
        shape: {
            dimension: { // Set maximum dimensions
                maxWidth: 32,
                maxHeight: 32
            },
            spacing: { // Add padding
                padding: 0
            },
            //dest: 'out/intermediate-svg' // Keep the intermediate files
        },
        mode: {
/*            view: { // Activate the «view» mode
                bust: false,
                render: {
                    scss: false // Activate Sass output (with default options)
                }
            },*/
            symbol: true // Activate the «symbol» mode
        }
    };

    return src('images/svg/*.svg'/*,{ cwd: 'images/svg' }*/)
        .pipe(svgSprite(config))
        .pipe(dest('images'));
}

// Cachebust
var cbString = new Date().getTime();
function cacheBustTask(){
    return src(['index.html'])
        .pipe(replace(/cb=\d+/g, 'cb=' + cbString))
        .pipe(dest('.'));
}

// Watch task: watch SCSS and JS files for changes
// If any change, run scss and js tasks simultaneously
function watchTask(){
    watch([files.scssPath, files.jsPath],
        parallel(scssTask, jsTask, svgTask));
}

// Export the default Gulp task so it can be run
// Runs the scss and js tasks simultaneously
// then runs cacheBust, then watch task
exports.default = series(
    parallel(scssTask, jsTask, svgTask),
    cacheBustTask,
    watchTask
);
