var gulp=require('gulp');

var traditionalized=require('./fplugin/traditionalized.js');

gulp.task('traditionalized',function(sim){
  gulp.src('./test/**/*')
      .pipe(traditionalized(sim))
      .pipe(gulp.dest('dist/zh-HK/'));
});


gulp.task('default',['traditionalized'],function(){
  console.log('okay.');
});
