var Random = Mock.Random;
Random.extend({
  constellation: function() {
    var constellations = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']
    return this.pick(constellations)
  },

  school: function() {
    var school = ['安徽师范大学', '中国科技技术大学', '安徽财经大学'];
    return this.pick(school)
  },
  authornames: function() {
    var name = ['张伟', '李丽','王东','张忠','司马光'];
    return this.pick(name)
  },
  gender: function() {
    var name = ['男', '女'];
    return this.pick(name)
  },
  images: function() {
    var name = [
      'http://static.ghostchina.com/image/0/94/6ac3f0cbeb3ab6e39fa40d37f9233.png',
      'http://static.ghostchina.com/image/4/45/e447fa21190690b28f1957d5937f4.png',
      'http://static.ghostchina.com/image/a/21/de1b2911072f5a4eff82abdb62632.png',
      '',
      'http://static.ghostchina.com/image/c/06/765c76cb1ca259dd8fe8002459bbc.jpg'
    ];
    return this.pick(name)
  }

});
Random.constellation();
Random.authornames();
Random.gender();
Random.images();
Random.school();

Mock.mock('@constellation');
Mock.mock('@authornames');
Mock.mock('@gender');
Mock.mock('@images');
Mock.mock('@school');

Mock.mock('http://test.163.com', {
  'title':     '@cword',
  'name'     : '@authornames',
  'age|1-100': 100,
  'color'    : '@color',
  'sch':'@school'
});


Mock.mock('http://articles.163.com', {
    "allArticles|10": [
      {
        "id": 'article_' + '@integer(1, 100)',
        "title": "@cword(4,8)",
        "author": '@authornames',
        "date": Random.date('yyyy-MM-dd'),
        "content": "@cparagraph(4, 7)",
        "image": "@images"

      }
    ]
  }

);