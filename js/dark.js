(function(){
  if(document.cookie.replace(/(?:(?:^|.*;\s*)dark\s*\=\s*([^;]*).*$)|^.*$/, "$1") === ''){
      if(new Date().getHours() > 21 || new Date().getHours() < 6){
          document.body.classList.add('dark');
          document.cookie = "dark=1;path=/";
          console.log('Dark mode on');
      }else{
          document.body.classList.remove('dark');
          document.cookie = "dark=0;path=/";
          console.log('Dark mode off');
      }
  }else{
      var dark = document.cookie.replace(/(?:(?:^|.*;\s*)dark\s*\=\s*([^;]*).*$)|^.*$/, "$1") || '0';
      if(dark == '0'){
          document.body.classList.remove('dark');
      }else if(dark == '1'){
          document.body.classList.add('dark');
      }
  }
})();




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

