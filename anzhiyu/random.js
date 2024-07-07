var posts=["wenzhang/2号/","wenzhang/这是一篇新文章/","wenzhang/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };