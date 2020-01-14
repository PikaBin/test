exports.keys = "YOUR_SECURITY_COOKIE_KEYS";

//add view configuration
exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  exports.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };

  exports.mongoose = {
    client: {
      url: 'mongodb://admin:admin123@123.57.254.158:27017/admin?authSource=admin',
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    },
  };