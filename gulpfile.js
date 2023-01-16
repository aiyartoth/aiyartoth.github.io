const gulp = require("gulp"); // 引入 gulp
const path = require("path");
gulp.task("default", () => {
  return gulp.src("./src/love/**/*").pipe(gulp.dest("./dist/love"));
});
