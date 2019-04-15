'use strict';

var through2=require('through2');
var cclibrary=require('./cclibrary');

var allCHs=cclibrary.allCHs;
var allCHt=cclibrary.allCHt;

function dealFileContents(data,sim){
  var strResult='';

  var i,nowCC,numAllI;

  for (i=0; i<data.length; i++){
    // 当前要处理的汉字
    nowCC=data.charAt(i);
    if(!sim){
      numAllI=allCHs.indexOf(nowCC);
      // 当前要处理的汉字有繁体字
      if (numAllI!==-1){
        strResult+=allCHt.charAt(numAllI);
      } else {
        strResult+=nowCC;
      }
    }else{
      //繁體轉簡體
      numAllI=allCHt.indexOf(nowCC);
      if(numAllI!==-1){
        strResult+=allCHs.charAt(numAllI);
      }else{
        strResult+=nowCC;
      }
    }
  }

  return strResult;
}

function traditionalized(sim){
  sim=sim || false;

return through2.obj(function(file,encoding,cb){

    if (file.isNull()){
      console.log(file);
      // This.push(file);
      return cb();
    }

    if (file.isStream()){
      console.log('isStream');
      this.emit('error');

return cb();
    }

    var content=dealFileContents(file.contents.toString(),sim);

    file.contents=new Buffer(content);

    this.push(file);
    cb();
  });
}

module.exports=traditionalized;
