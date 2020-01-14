const Controller = require('egg').Controller;

class NewsController extends Controller{

    async list(){
        //const ctx = this.ctx;
        // const page = ctx.query.page||1;
        // const newList = await this.service.news.list(page);
        // await this.ctx.render("../view/news/list.tpl",{list:newList});


            const dataList = {
              list: [
                { id: 1, title: 'this is news 1', url: '/news/1' },
                { id: 2, title: 'this is news 2', url: '/news/2' }
              ]
            };
            await this.ctx.render('../view/news/list.tpl', dataList);
            //console.log(this.fileMap.get(name));
    }
}

module.exports = NewsController;