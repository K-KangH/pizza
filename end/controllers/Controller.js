const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const Order = require('../models/orderModel');

const getMyPage = asyncHandler(async (req, res) => {
    res.render();
});

const getOrderCreatePage = asyncHandler(async (req, res) => {
    res.render();
});

const getRegisterPage = asyncHandler(async (req, res) => {});

const getLoginPage = asyncHandler(async (req, res) => {});

// 회원가입
const registerUser = asyncHandler(async (req, res) => {
    // 회원가입 로직
    const { username, userpw, useraddress } = req.body;
    const userExists = await User.findOne({ username });
    if (userExists) {
        return res.status(400).json({ message: '이미 존재하는 사용자입니다.' });
    } else {
        const user = await User.create({ username, userpw, useraddress });
        return res.status(200).json({ message: '가입성공' });
    }
});

// 로그인
const loginUser = asyncHandler(async (req, res) => {
    const { username, userpw } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
        return res.status(400).json({ message: '일치하는 사용자가 없습니다.' });
    }
    // const isMatch = await compare(userpw, user.userpw);
    if (userpw !== user.userpw) {
        return res.status(401).json({ message: '비밀번호가 일치하지 않습니다.' });
    }
    //로그인성공시 리턴
    return res.status(200).json({
        message: '로그인에 성공했습니다.',
        user: {
            username: user.username,
            useraddress: user.useraddress,
        },
    });
});

// 사용자 정보 조회 //미완
const getUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
    }
    res.render('userProfile', { user }); // 사용자 정보 렌더링
});

// 사용자 정보 수정 //미완
const updateUser = asyncHandler(async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.redirect(`/users/${updatedUser._id}`); // 수정 후 사용자 정보 페이지로 리다이렉트
});

// 회원 탈퇴 및 관련 주문 삭제 //미완
const deleteUser = asyncHandler(async (req, res) => {
    await Order.deleteMany({ user: req.params.id }); // 관련된 모든 주문 삭제
    await User.findByIdAndDelete(req.params.id); // 사용자 삭제
    res.redirect('/users'); // 삭제 후 사용자 리스트 페이지로 리다이렉트
});

// 주문 리스트 내보내기 (관리자: 모든 주문, 사용자: 자신의 주문만)
const getAllOrders = asyncHandler(async (req, res) => {
    const { id } = req.params;

    if (id === 'admin') {
        // 관리자는 모든 주문을 시간순으로 가져오게함
        orders = await Order.find().sort({ createdAt: -1 });
    } else {
        // 관리자가 아닌경우에
        orders = await Order.find({ orderbyid: id }).sort({ createdAt: -1 });
    }
    // 가져온 주문 정보를 json 파일형식으로 넘겨줌
    res.json({ orders });
});

// 주문 생성
const createOrder = asyncHandler(async (req, res) => {
    const { product, quantity, orderbyid, createdAt } = req.body;
    try {
        const savedOrder = await Order.create({ product, quantity, orderbyid, createdAt });
        // 성공 응답
        return res.status(201).json({ message: '주문 완료.', order: savedOrder });
    } catch (error) {
        // 에러 처리
        return res.status(500).json({ message: '서버 오류로 주문실패.' });
    }
});

// 특정 주문 수정
const updateOrder = asyncHandler(async (req, res) => {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.redirect(`/orders/${updatedOrder._id}`); // 수정 후 주문 상세 페이지로 리다이렉트
});

// 특정 주문 삭제
const deleteOrder = asyncHandler(async (req, res) => {
    await Order.findByIdAndDelete(req.params.id);
    res.redirect('/orders'); // 삭제 후 주문 리스트 페이지로 리다이렉트
});

// // 특정 주문 조회
// const getOrder = asyncHandler(async (req, res) => {
//     const order = await Order.findById(req.params.id);
//     if (!order) {
//         res.status(404).json({ message: 'Order not found' });
//         return;
//     }
//     res.render('orderDetail', { order }); // 특정 주문 상세 렌더링
// });

module.exports = {
    registerUser,
    loginUser,
    getUser,
    updateUser,
    deleteUser,
    createOrder,
    updateOrder,
    deleteOrder,
    getOrderCreatePage,
    getRegisterPage,
    getLoginPage,
    getMyPage,
    getAllOrders,
};
