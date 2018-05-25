//所有文章
var articles;

//每页含有3篇文章
var page_size=5;

//当前是第一页
var page_index=1;

//总页数

var page_acount=0;

$.ajax({
  url:'http://articles.163.com',
  type:'get',
  dataType:'json',
  success:function (dd) {

    //计算总页数
    page_acount=Math.ceil(dd.allArticles.length/page_size);

    //显示文章
    articles=dd.allArticles;
    displayArticles();

    $('.btn-previous').hide();
  },
  error:function (err) {
    alert(err);
  }
});

function displayArticles() {
  var article_container=$('.post-list');


  //当前页内容   （页码-1）*每页容纳的文章数---->页码*每页容纳文章数-1


  var now_articles=articles.slice((page_index-1)*page_size,page_index*page_size);

  var btn_now=$('.btn-now');
  btn_now.val(`第${page_index}页共${page_acount}页`);

  article_container.empty();
  for(var i=0;i<now_articles.length;i++){
    article_container.append(
      ` <div class="post-container">
      <!-- 博文图片 -->
      <div class="post-img">
        <img src="./img/post-img.jpg" alt="">
      </div>
      <!-- 博文内容 -->
      <div class="post">
        <div class="post-title">
          ${articles[i].title}
        </div>
        <div class="post-author">
          作者：<a href="#">${articles[i].author}</a> • ${articles[i].date}
        </div>
        <div class="post-content">
          ${articles[i].content}
        </div>
        <div class="post-link">
          <a href="#">阅读全文</a>
        </div>
      </div>
    </div> `
    );
  }
}


$('.btn-next').click(function () {
  if(page_index<page_acount){
    $('.btn-previous').show();
    page_index++;
    displayArticles();
  }else {
    $('.btn-next').hide();
  }
})

$('.btn-previous').click(function () {
  if(page_index>1){
    $('.btn-next').show();
    page_index--;
    displayArticles();
  }else {
    $('.btn-previous').hide();
  }

})