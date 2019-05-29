const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/media');

let db = mongoose.connection;
// 防止Mongoose: mpromise 错误
mongoose.Promise = global.Promise;

db.on('error', function(){
    console.log('数据库连接出错！');
});
db.on('open', function(){
    console.log('数据库连接成功！');
});

//声明schema
const userSchema = mongoose.Schema({
    username: String,
    password: String,
    // recheck: String,
    token: String,
    create_time: Date
});
//评论
const messageSchema = mongoose.Schema({
    messname: String,
    message: String,
    create_time:String
});
//收藏
const collectSchema = mongoose.Schema({
    username: String,
    videoname:String,
    create_time:String
});
//根据schema生成model
const model = {
    User: mongoose.model('User', userSchema),
    Message: mongoose.model('Message',messageSchema),
    collect: mongoose.model('collect',messageSchema),
};

module.exports = model;
