const BBS = require('../db.js').BBS
//下面这两个包用来生成时间
const moment = require('moment');
const objectIdToTimestamp = require('objectid-to-timestamp');
//新增留言板评论
const addBBS = async(ctx) => {
    let bbs = new BBS({
      messname: ctx.request.body.name,
      message: ctx.request.body.mess,
      create_time:moment().format('YYYY-MM-DD HH:mm:ss'),
    });
    await new Promise((resolve, reject) => {
      bbs.save((err) => {
        if (err) {
          reject(err);
        }
        resolve();
      });
    });
    console.log('增加留言板评论成功');
      ctx.status = 200;
      ctx.body = {
        success: true
      }
  };
  module.exports = {
    addBBS,
}