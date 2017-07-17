'use strict';

var through2=require('through2');
var cclibrary=require('./cclibrary');

var allCHs=cclibrary.allCHs;
var allCHt=cclibrary.allCHt;

function versionFun(data){
  var strCHt='';

  var i,nowCC,numAllI;
  for(i=0;i<data.length;i++){
    //当前要处理的汉字
    nowCC=data.charAt(i);
    //console.log(nowCC);
    numAllI=allCHs.indexOf(nowCC);
    //当前要处理的汉字有繁体字
    if(numAllI!==-1){
      strCHt+=allCHt.charAt(numAllI);
    }else{
      strCHt+=nowCC;
    }
  }

  return strCHt;
}

function traditionalized(){
  return through2.obj(function(file,encoding,cb){

    if(file.isNull()){
      console.log('isNull');
      this.push(file);
      return cb();
    }

    if(file.isStream()){
      console.log('isStream');
      this.emit('error');
      return cb();
    }

    var content=versionFun(file.contents.toString());
    file.contents=new Buffer(content);

    this.push(file);
    cb();
  });
}

module.exports=traditionalized;
