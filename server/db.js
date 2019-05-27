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
const userSchema = mongoose.Schema({ //Schema里面的对象和数据库里面的字段需要一一对应
    username: String,
    password: String,
    token: String,
    create_time: Date
});
//声明管理员模块
const adminSchema = mongoose.Schema({
	adminname: String,
	password: String,
	token: String,
	create_time: Date
});
//声明评价管理员模块
const messageSchema = mongoose.Schema({
	messinformation: String,
})
//根据schema生成model
const model = {
    User: mongoose.model('User', userSchema),//默认会操作users表
	Admin: mongoose.model('Admin',adminSchema),
	Message: mongoose.model('Message',messageSchema)
};

module.exports = model;
