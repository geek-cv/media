const Admin = require('../db.js').Admin;
//下面这两个包用来生成时间
const moment = require('moment');
const objectIdToTimestamp = require('objectid-to-timestamp');
//用于密码加密
const sha1 = require('sha1');
//createToken
const createToken = require('../token/createToken.js');

//数据库的操作

//登录
const adminLogin = async(ctx) => {
  //拿到账号和密码
  let admin_name = ctx.request.body.adminname;
  //let admin_password = sha1(ctx.request.body.adminpass);
  let admin_password = sha1(ctx.request.body.adminpass);
  let doc = await findAdmin(admin_name);

  if (!doc) {
    console.log('检查到用户名不存在');
    ctx.status = 200;
    ctx.body = {
      info: false
    }
  } else if (doc.admin_password === admin_password) {
    console.log('密码一致!');
    //生成一个新的token,并存到数据库
    let token = createToken(admin_name);
    doc.token = token;
    await new Promise((resolve, reject) => {
      doc.save((err) => {
        if (err) {
          reject(err);
        }
        resolve();
      });
    });

    ctx.status = 200;
    ctx.body = {
      success: true,
      admin_name,
      token, //登录成功要创建一个新的token,应该存入数据库
      create_time: doc.create_time
    };
  } else {
    console.log('密码错误!');
    ctx.status = 200;
    ctx.body = {
      success: false
    };
  }
};
//查找管理员
const findAdmin = (admin_name) => {
    return new Promise((resolve, reject) => {
      Admin.findOne({ admin_name }, (err, doc) => {
        if (err) {
          reject(err);
        }
        resolve(doc);
      });
    });
  };
//注册
const adminReg = async(ctx) => {
  let admin = new Admin({
    admin_name: ctx.request.body.adminname,
    admin_password: sha1(ctx.request.body.adminpass), //加密
    token: createToken(this.admin_name) //创建token并存入数据库
  });

  //将objectid转换为用户创建时间(可以不用)
  admin.create_time = moment(objectIdToTimestamp(admin._id)).format('YYYY-MM-DD HH:mm:ss');
  let doc = await findAdmin(admin.admin_name);
  if (doc) {
    console.log('管理员账户已经存在');
    ctx.status = 200;
    ctx.body = {
      success: false
    };
  } else {
    await new Promise((resolve, reject) => {
      admin.save((err) => {
        if (err) {
          reject(err);
        }

        resolve();

      });
    });
    console.log('注册成功');
    ctx.status = 200;
    ctx.body = {
      success: true
    }
  }
};

module.exports = {
  adminLogin,
  adminReg,
};
