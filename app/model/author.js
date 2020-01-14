module.exports = app =>{
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const authorSchema = new Schema({
        first_name:{type:String,required:true,max:5},
        family_name:{type:String,require:true,max:5},
        birth:Date,
        death:Date,
    });

    return mongoose.model('Author',authorSchema);
}