(function(){
    console.log(localStorage.dark);
  if(localStorage.dark == 0 ){
      if(new Date().getHours() > 21 || new Date().getHours() < 6 || getComputedStyle(document.documentElement).getPropertyValue('content') == '"dark"' ){
          document.body.classList.add('dark');
          localStorage.setItem('dark','1');
          console.log('Dark mode on');
      }else{
          document.body.classList.remove('dark');
          localStorage.setItem('dark','0');
          console.log('Dark mode off');
      }
  }else{
        document.body.classList.add('dark');
  }
})();

// macos dark mode :"dark"
//       light mode : "normal"


function switchNightMode() {
    var isDark=$('body').hasClass('dark');
    if (isDark) {
        document.body.classList.remove('dark');
        localStorage.setItem('dark','0');
        console.log('夜间模式关闭');
    }else{
        document.body.classList.add('dark');
        localStorage.setItem('dark','1');
        console.log('夜间模式开启');
    }
}

