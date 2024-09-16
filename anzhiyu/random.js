var posts=["wenzhang/jiyu/","wenzhang/Windows窗口控制/","wenzhang/基于Windows的安卓子系统/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };