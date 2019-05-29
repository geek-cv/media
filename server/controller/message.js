const Message = require('../db.js').Message;
const  moment = require('moment');


//数据库操作
//新增评论
const addMess = async(ctx) => {
  let mess = new Message({
    messname: ctx.request.body.name,
    message: ctx.request.body.mess,
    create_time:moment().format('YYYY-MM-DD HH:mm:ss'),
  });
  await new Promise((resolve, reject) => {
    mess.save((err) => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
  console.log('增加成功');
    ctx.status = 200;
    ctx.body = {
      success: true
    }
};
//找到所有评论
const findAllMess = () => {
  return new Promise((resolve, reject) => {
    Message.find({}, (err, doc) => {
      if (err) {
        reject(err);
      }
      resolve(doc);
    });
  });
};

//获得所有评论
const getAllMess = async(ctx) => {
  //查询所有用户信息
  let doc = await findAllMess();
  ctx.status = 200;
  ctx.body = {
    succsess: '成功',
    result: doc.reverse()
  };
};

module.exports = {
    addMess,
    getAllMess,
}