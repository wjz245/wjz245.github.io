var posts=["2024/07/03/hello-world/","2024/07/03/这是一篇新文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };