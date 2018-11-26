
(function(){
    var designWidth=375;
    var refreshRem=(function refreshRem(){
      var deviceWidth=document.documentElement.clientWidth;
      deviceWidth=Math.max(Math.min(414,deviceWidth),320);
      document.getElementsByTagName('html')[0].style.fontSize=(deviceWidth/designWidth)*100+'px';
      return refreshRem;
    })();
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    window.addEventListener(resizeEvt,refreshRem,false);
  })();