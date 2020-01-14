const Controller = require('egg').Controller;

class CurdController extends Controller {
    // 增加一条作者记录
    async addAuthor(){
        const Moyan = new this.ctx.model.Author({
            first_name:'Mo',
            family_name:'yan',
            birth:new Date('1928'),
            death:null,
        });

        Moyan.save(function(err){
            if(err) return handleError(err);
        });

        return Moyan;
    }
    // 给定id,查询作者
    async queryAuthor(){
        // const ctx = this.ctx;
        // var temp;
        
        const Author = this.ctx.model.Author;
        console.log(Author);
        // ctx.body = await Author.findById('5e11e7542a84757028cc40a8');
        // console.log("what is this.ctx" + JSON.stringify(this.ctx,null));
         Author.findById('5e11e7542a84757028cc40a8',function(err,data){
            if(err){
                return handleError(err);
            }else{              
                // temp = data;
                console.log(data);         
            }
        });
        // console.log(temp)
    }

    // 删除指定作者
    async deleteAuthor(){
        const Author = this.ctx.model.Author;

        Author.deleteOne({_id:'5e11d681f5f6dc51a05efbf6'},function(err){
            if(err){
                return handleError(err);
            }else{
                console.log("删除成功");
            }
        })
    }

    // 更新
    async updateAuthor(){
        const Author = this.ctx.model.Author;

        Author.updateOne({_id:'5e11e7542a84757028cc40a8'},{family_name:'Yanlin'},function(err){
            if(err){
                return handleError(err);
            }else{
                console.log("更新成功");
            }
        });
    }
}

module.exports = CurdController;