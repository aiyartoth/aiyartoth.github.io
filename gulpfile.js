const gulp = require("gulp"); // 引入 gulp
const path = require("path");
gulp.task("love", () => {
  return gulp.src("./src/love/**/*").pipe(gulp.dest("./dist/love"));
});
gulp.task("firstpage", () => {
  return gulp.src("./src/README.md").pipe(gulp.dest("./dist/"));
});

gulp.task("default", gulp.series("love", "firstpage"));
