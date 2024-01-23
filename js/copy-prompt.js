/*复制版权提示*/

document.onkeydown = function () {if (window.event && window.event.keyCode == 123) {event.keyCode = 0;event.returnValue = false;
return false;}};
document.onkeydown=function(){if(event.ctrlKey&&window.event.keyCode==85){new Vue({data:function(){this.$notify({title:"嘿！别瞎按",message:"老小子，想偷我源码？~",position:'bottom-right',offset:50,showClose:true,type:"error"});return{visible:false}}})
return false;}
if(window.event&&window.event.keyCode==123){event.keyCode=0;event.returnValue=false;new Vue({data:function(){this.$notify({title:"嘿！Bingo~",message:"哥们，试试 Alt+Shift+Fn+F4",position:'bottom-right',offset:50,showClose:true,type:"error"});return{visible:false}}})
return false;}
if(event.ctrlKey&&window.event.keyCode==83){new Vue({data:function(){this.$notify({title:"嘿！你瞧瞧你",message:"网页得换方法保存哦~",position:'bottom-right',offset:50,showClose:true,type:"error"});return{visible:false}}})
return false;}
if((event.ctrlKey)&&(event.shiftKey)&&(event.keyCode==73)){new Vue({data:function(){this.$notify({title:"嘿！哈哈哈",message:"老弟，不是这样调试的换换吧~",position:'bottom-right',offset:50,showClose:true,type:"error"});return{visible:false}}})
return false;}}
document.addEventListener("copy",function(e){new Vue({data:function(){this.$notify({title:"耶！复制成功",message:"转载记得保留煜轩一言原文链接哦！谢谢",position:'bottom-right',offset:50,showClose:true,type:"success"});return{visible:false}}})})


