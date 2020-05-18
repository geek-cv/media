const Collect = require('../db.js').Collect;

//创建收藏
const addCollects = async(ctx) => {
    let collect = new Collect({
      username: ctx.request.body.username,
      video_name: ctx.request.body.video_url,
    });
    await new Promise((resolve, reject) => {
      collect.save((err) => {
        if (err) {
          reject(err);
        }
        resolve();
      });
    });
    console.log('收藏成功');
      ctx.status = 200;
      ctx.body = {
        success: true
      }
  };
  //获得收藏信息
  const findAllCollects = async(ctx) =>{
    let data = await collects.find()
    ctx.response.body=data
  }
const findAllCollect = () =>{
  return new Promise((resolve,reject) =>{
    Collect.find({},(err,doc) =>{
      if(err){
        reject(err);
      }
      resolve(doc);
    });
  });
};

  module.exports = {
    addCollects,
    findAllCollects
  }