var posts=["2024/07/06/2号/","2024/07/03/这是一篇新文章/","2024/07/03/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };