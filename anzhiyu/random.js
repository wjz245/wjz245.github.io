var posts=["wenzhang/jiyu/","wenzhang/Markdown的基础语法 No.1/","wenzhang/markdown基础编辑1/","wenzhang/网页游戏/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };