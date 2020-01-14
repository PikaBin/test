// const Controller = require('egg').Controller;

// class AuthorController extends Controller {

//     async showData(){
        
//     }
// }

// module.exports = AuthorController;

exports.index = function* (ctx) {
    ctx.body = yield ctx.model.Author.find({});
  }