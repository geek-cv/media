const Koa = require('koa');
const app = new Koa();

//router
const Router = require('koa-router');
//文件上传配置
const fs = require('fs');
const path = require('path');
//父路由
const router = new Router();

const cors = require('koa2-cors');

// 具体参数
app.use(cors({
    origin: function (ctx) {
        if (ctx.url === '/test') {
            return "*"; // 允许来自所有域名请求
        }
        return 'http://localhost:8080'; 
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))

const koabody = require('koa-body');
app.use(koabody({
	multipart: true,
	formidable: {
		maxFileSize: 2000*1024*1024 //设置上传文件大小最大限制，默认20M
	}
}));

//bodyparser:该中间件用于post请求的数据
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

//文件上传
const uploadRouter = new Router();
uploadRouter.post('/upload', async (ctx, next) => {
  // 上传单个文件
  const file = ctx.request.files.file; // 获取上传文件
 
  // 创建可读流
  const reader = fs.createReadStream(file.path);
  let filePath = path.join(__dirname, 'public/upload/') + `/${file.name}`;
  // 创建可写流
  const upStream = fs.createWriteStream(filePath);
  // 可读流通过管道写入可写流
  reader.pipe(upStream);
  return console.log('上传成功');
});

//引入数据库操作方法
const UserController = require('./server/controller/user.js');
const AdminController = require('./server/controller/admin.js');
const MessController = require('./server/controller/message.js');
const BBSController = require('./server/controller/bbs.js')

//checkToken作为中间件存在
const checkToken = require('./server/token/checkToken.js');

//登录
const loginRouter = new Router();
loginRouter.post('/login', UserController.Login);
//注册
const registerRouter = new Router();
registerRouter.post('/register', UserController.Reg);
//获取所有用户
const userRouter = new Router();
userRouter.get('/findAllUsers', checkToken, UserController.GetAllUsers);
//管理员登录
const adminloginRouter = new Router();
adminloginRouter.post('/adminlogin', AdminController.adminLogin);
//注册管理员
const adminregisterRouter = new Router();
adminregisterRouter.post('/adminregister', AdminController.adminReg);
//新增收藏
const addCollectRouter = new Router();
addCollectRouter.post('/addCollect',  UserController.addCollect);

//新增评论
const addMessRouter = new Router();
addMessRouter.post('/addMess',MessController.addMess);
//显示所有评论
const getAllMessRouter = new Router();
getAllMessRouter.get('/getAllMess',MessController.getAllMess)
//删除评论
const removeMessRouter = new Router();
removeMessRouter.post('/removeMess',MessController.removeMess)
//用monk写的获取用户
const getUsersRouter = new Router();
getUsersRouter.get('/getUsers',UserController.getUsers)
//用monk写的删除用户
const delUsersRouter = new Router();
delUsersRouter.post('/delUsers',UserController.delUsers)
//新增留言板评论
const addBBSRouter = new Router();
addBBSRouter.post('/addBBS',BBSController.addBBS)

//装载用户路由
router.use('/api',loginRouter.routes(),loginRouter.allowedMethods());
router.use('/api',registerRouter.routes(),registerRouter.allowedMethods());
router.use('/api',userRouter.routes(),userRouter.allowedMethods());

router.use('/api',addCollectRouter.routes(),addCollectRouter.allowedMethods());
//装载管理员路由
router.use('/api',adminloginRouter.routes(),adminloginRouter.allowedMethods());
router.use('/api',adminregisterRouter.routes(),adminregisterRouter.allowedMethods());
//文件上传
router.use('/api', uploadRouter.routes(), uploadRouter.allowedMethods());
//装载评论
router.use('/api', addMessRouter.routes(), addMessRouter.allowedMethods());
router.use('/api', getAllMessRouter.routes(), getAllMessRouter.allowedMethods());
router.use('/api', removeMessRouter.routes(), removeMessRouter.allowedMethods());

//获取用户 monk
router.use('/api', getUsersRouter.routes(), getUsersRouter.allowedMethods());
//删除用户 monk
router.use('/api', delUsersRouter.routes(), delUsersRouter.allowedMethods());
//新增留言板路由
router.use('/api', addBBSRouter.routes(), addBBSRouter.allowedMethods());

//加载路由中间件
app.use(router.routes()).use(router.allowedMethods());

app.listen(8888, () => {
    console.log('The server is running at http://localhost:' + 8888);
});

