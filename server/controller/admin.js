const Admin = require('../db.js').Admin;
//下面这两个包用来生成时间
const moment = require('moment');
const objectIdToTimestamp = require('objectid-to-timestamp');
//用于密码加密
const sha1 = require('sha1');
//createToken
const createToken = require('../token/createToken.js');

//数据库的操作
//根据用户名查找用户
const findAdmin = (adminname) => {
  return new Promise((resolve, reject) => {
    User.findOne({ adminname }, (err, doc) => {
      if (err) {
        reject(err);
      }
      resolve(doc);
    });
  });
};
//找到所有用户
const findAllAdmin = () => {
  return new Promise((resolve, reject) => {
    Admin.find({}, (err, doc) => {
      if (err) {
        reject(err);
      }
      resolve(doc);
    });
  });
};
//删除某个用户
const delAdmin = function(id) {
  return new Promise((resolve, reject) => {
    User.findOneAndRemove({ _id: id }, err => {
      if (err) {
        reject(err);
      }
      console.log('删除用户成功');
      resolve();
    });
  });
};

//登录
const AdminLogin = async(ctx) => {
  //拿到账号和密码
  let adminname = ctx.request.body.name;
  let password = sha1(ctx.request.body.pass);

  let doc = await findAdmin(adminname);

  if (!doc) {
    console.log('检查到用户名不存在');
    ctx.status = 200;
    ctx.body = {
      info: false
    }
  } else if (doc.password === password) {
    console.log('密码一致!');
    //生成一个新的token,并存到数据库
    let token = createToken(adminname);
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
      adminname,
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
//注册
const AdminReg = async(ctx) => {
  let admin = new Admin({
    adminname: ctx.request.body.name,
    password: sha1(ctx.request.body.pass), //加密
    token: createToken(this.adminname) //创建token并存入数据库
  });

  //将objectid转换为用户创建时间(可以不用)
  admin.create_time = moment(objectIdToTimestamp(admin._id)).format('YYYY-MM-DD HH:mm:ss');
  let doc = await findAdmin(admin.adminname);
  if (doc) {
    console.log('用户名已经存在');
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
//获得所有用户信息
const GetAllAdmin = async(ctx) => {
  //查询所有用户信息
  let doc = await findAllAdmin();
  ctx.status = 200;
  ctx.body = {
    succsess: '成功',
    result: doc
  };
};

//删除某个用户
const DelAdmin = async(ctx) => {
  //拿到要删除的用户id
  let id = ctx.request.body.id;
  await delAdmin(id);
  ctx.status = 200;
  ctx.body = {
    success: '删除成功'
  };
};

module.exports = {
  AdminLogin,
  AdminReg,
  GetAllAdmin,
  DelAdmin
};
