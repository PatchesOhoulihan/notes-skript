var gulp = require("gulp");
var sass = require("gulp-sass");
var eslint = require("gulp-eslint");
var jasmine = require("gulp-jasmine-phantom");
var autoprefixer =require("gulp-autoprefixer");
var browserSync = require("browser-sync").create();

gulp.task("default", ["styles","lint"],function(){
    gulp.watch("sass/**/*.scss",["styles"]);

});

gulp.task("serve", function() {
    browserSync.init({
        server: "./"
    });
    browserSync.stream();
    gulp.watch("./*.html").on("change", browserSync.reload);
});

gulp.task("lint", function () {
  
    return gulp.src(["**/*.js","!node_modules/**","!gulpfile.js"])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task("styles" ,function(){
    gulp.src("sass/**/*.scss")
    .pipe(sass().on("error",sass.logError))
    .pipe(autoprefixer({
        browsers:["last 2 versions"]
    }))
		.pipe(gulp.dest("./css"));

});


gulp.task("watch", function(){
    gulp.watch("sass/**/*.scss",["styles"]);
    gulp.watch("js/**/*.js", ["lint"]);
});

gulp.task("test", function(){
  gulp.src("tests/test.js")
  .pipe(jasmine({
    integration:true,
    vendor:"js/**/*.js"
  }));
})
