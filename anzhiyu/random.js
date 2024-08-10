var posts=["wenzhang/jiyu/","wenzhang/基于Windows的安卓子系统/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };