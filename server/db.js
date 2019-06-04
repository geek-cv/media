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

//声明用户schema
const userSchema = mongoose.Schema({
    username: String,
    password: String,
    address:String,
    sex: String,
    // recheck: String,
    token: String,
    video_name: String,
    create_time: Date
});
//声明管理员schema
const adminSchema = mongoose.Schema({
    admin_name: String,
    admin_password: String,
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
//留言板
const bbsSchema = mongoose.Schema({
    create_time:Date,
    message:String,
    username:String
});
//视频
const videoScheme = mongoose.Schema({
    video_name:String,
    video_url:String
})
//根据schema生成model
const model = {
    User: mongoose.model('User', userSchema),
    Admin: mongoose.model('Admin', adminSchema),
    Message: mongoose.model('Message',messageSchema),
    BBS:mongoose.model('BBS',bbsSchema),
    Video:mongoose.model('Video',videoScheme)
};

module.exports = model;
