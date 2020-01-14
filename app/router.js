module.exports = app =>{
    //下面这个声明很奇怪，和以往的感觉不太一样，难道是解构赋值？？就是解构赋值
    //这个controller.home.index 什么含义？难道意为由home.js下的index()函数处理
    //但是有没有引入相应的包，为什么就可以调用其他文件的的函数（约定大于配置的思想）
    const {router,controller}=app;

    router.get("/",controller.testMongoDB.index);
    router.get("/news",controller.news.list);
    router.get('/addAuthor',controller.curd.addAuthor);
    router.get('/queryAuthor',controller.curd.queryAuthor);
    router.get('/deleteAuthor',controller.curd.deleteAuthor);
    router.get('/updateAuthor',controller.curd.updateAuthor);

    //console.log(app);
}