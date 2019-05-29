const Message = require('../db.js').Message;

//数据库操作
//保存
const addCollect = async(ctx) => {
    let collect = new Collection({
      username: ctx.request.body.name,
      videoname: ctx.request.body.videoname,
    });
    await new Promise((resolve, reject) => {
      collect.save((err) => {
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