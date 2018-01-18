/**
 * by Hope_pdm
 * instruction: 压缩css，js
 */

// 引入 gulp及组件
var gulp = require( 'gulp' ), //gulp基础库
    gulpless = require('gulp-less'), //less编译
    minifycss = require( 'gulp-minify-css' ), //css压缩
    concat = require( 'gulp-concat' ), //合并文件
    uglify = require( 'gulp-uglify' ), //js压缩
    rename = require( 'gulp-rename' ), //文件重命名
    notify = require( 'gulp-notify' ); //提示 // jshint = require( 'gulp-jshint' ), //js检查  

//css处理 合并压缩
gulp.task( 'minifycss', function () {
    return gulp.src( 'public/*.css' ) //设置css
        .pipe(gulpless())
        // .pipe(gulp.dest('dist'))
        // .pipe( concat( 'order_query.css' ) ) //合并css文件到"order_query"
        // .pipe( gulp.dest( 'dist/styles' ) ) //设置输出路径
        .pipe( rename( {
            suffix: '.min'
        } ) ) //修改文件名
        .pipe( minifycss() ) //压缩文件
        .pipe( gulp.dest( 'dist' ) ) //输出文件目录
        .pipe( notify( {
            message: 'css task ok'
        } ) ); //提示成功
} );

//JS处理
gulp.task( 'minifyjs', function () {
    return gulp.src( 'public/main.js' ) //选择合并的JS,矩阵
        // .pipe( concat( 'order_query.js' ) ) //合并js
        // .pipe( gulp.dest( 'dist' ) ) //输出
        .pipe( rename( {
            suffix: '.min'
        } ) ) //重命名
        .pipe( uglify({
            mangle: true, //是否修改变量名
            compress: true //是否完全压缩
            // preserveComments: 'all' //保留注释
        }) ) //压缩
        .pipe( gulp.dest( 'dist' ) ) //输出 
        .pipe( notify( {
            message: "js task ok"
        } ) ); //提示
} );

gulp.task( 'default', function () {
    gulp.start( 'minifycss', 'minifyjs' );
} );