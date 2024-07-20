var posts=["wenzhang/jiyu/","wenzhang/基于Windows的安卓子系统/","wenzhang/网页游戏/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };