# gulp-cht

將簡體中文轉換為繁體中文的gulp插件。<br />
Small gulp plugin to change CHS to CHT.

## Install

```shell
npm install --save-dev gulp-cht
```

## Usage

```javascript
var cht= require('gulp-cht');

gulp.task('default', function() {
  gulp.src('./index.html')
      .pipe(cht())
      .pipe(gulp.dest('dist/zh-HK/'))
});
```


## Change Log

#### 1.9.0
  - do NOT push null, such as folder

#### 1.5.9
  - stable edition. get in touch: https://www.npmjs.com/~15915940450 .

#### 1.0.0
  - assign main

#### 0.1.0
  - Initial release


## The License (MIT)
Copyright (c) 2017 Thilina Fong

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
