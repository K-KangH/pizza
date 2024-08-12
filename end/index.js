// const exp = require('express');
// const app = exp();
// const dbConnect = require('./config/dbConnect');
// const methodOverride = require('method-override');

// dbConnect();
// // view engine'은 ejs를 사용한다 선언
// app.set('view engine', 'ejs');
// // views 폴더의 경로 설정
// app.set('views', './views');
// app.use(exp.json());
// app.use(exp.urlencoded({ extended: true }));
// // 파일경로 설정 잡아주기(정적할당!)
// app.use(exp.static('./public'));
// app.use(methodOverride('_method'));

// // 이렇게 입력하면 홈으로 들어가면 웹에 welcome 이러고 출력됨!
// // app.get('/', (req, res) => {
// //     res.send('Welcome');
// // });

// app.get('/', (req, res) => {
//     res.render('getAll');
// });

// app.use('/contacts', require('./routes'));
// app.use('/register', require('./regRoutes'));

// app.listen(3000, () => {
//     console.log('서버상태 : Running');
// });

const express = require('express');
const app = express();
const port = 5000;
const dbConnect = require('./config/dbConnect');
const methodOverride = require('method-override');
const cors = require('cors');
require('dotenv').config();

dbConnect();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/register', require('./routes'));
app.use('/login', require('./routes'));
app.use('/home', require('./routes'));
app.use('/', require('./routes'));
app.use('/users/:id', require('./routes'));
app.use('/orders/:id', require('./routes'));
app.use('/orderlist/:id', require('./routes'));

// // test 접근 경로에 대해서 응답!
// app.get('/test', (req, res) => {
//     const responseMessage = { message: 'Hello from the backend!' };
//     console.log(responseMessage);
//     res.json(responseMessage);
// });

// // /login 경로에 대한 GET 요청 처리
// app.get('/login', (req, res) => {
//     res.redirect('http://localhost:3000/login');
// });
// app.get('/register', (req, res) => {
//     res.redirect('http://localhost:3000/register');
// });
// app.get('/orders', (req, res) => {
//     res.redirect('http://localhost:3000/orders');
// });
// app.get('/orders/:id', (req, res) => {
//     const userId = req.params.id;
//     res.redirect('http://localhost:3000/orders/:id');
// });
// app.get('/users/:id', (req, res) => {
//     const userId = req.params.id;
//     res.redirect('http://localhost:3000/login/users/:id');
// });

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
