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

dbConnect();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// test 접근 경로에 대해서 응답!
app.get('/test', (req, res) => {
    const responseMessage = { message: 'Hello from the backend!' };
    console.log(responseMessage);
    res.json(responseMessage);
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
