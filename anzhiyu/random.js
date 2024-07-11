var posts=["wenzhang/jiyu/","wenzhang/网页游戏/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };