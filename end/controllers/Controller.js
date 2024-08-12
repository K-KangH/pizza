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
    const isMatch = await compare(userpw, user.userpw);
    if (!isMatch) {
        return res.status(401).json({ message: '비밀번호가 일치하지 않습니다.' });
    }
});

// 사용자 정보 조회
const getUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
    }
    res.render('userProfile', { user }); // 사용자 정보 렌더링
});

// 사용자 정보 수정
const updateUser = asyncHandler(async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.redirect(`/users/${updatedUser._id}`); // 수정 후 사용자 정보 페이지로 리다이렉트
});

// 회원 탈퇴 및 관련 주문 삭제
const deleteUser = asyncHandler(async (req, res) => {
    await Order.deleteMany({ user: req.params.id }); // 관련된 모든 주문 삭제
    await User.findByIdAndDelete(req.params.id); // 사용자 삭제
    res.redirect('/users'); // 삭제 후 사용자 리스트 페이지로 리다이렉트
});

// 주문 리스트 조회 (관리자: 모든 주문, 사용자: 자신의 주문만)
const getAllOrders = asyncHandler(async (req, res) => {
    let orders;
    if (req.user.isAdmin) {
        orders = await Order.find().sort({ createdAt: -1 });
    } else {
        orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });
    }
    res.render('orderList', { orders }); // 주문 리스트 렌더링
});

// 주문 생성
const createOrder = asyncHandler(async (req, res) => {
    const newOrder = new Order({
        ...req.body,
        user: req.user._id, // 현재 로그인한 사용자의 ID를 주문에 포함
    });
    const savedOrder = await newOrder.save();
    res.redirect(`/orders/${savedOrder._id}`); // 생성된 주문 상세 페이지로 리다이렉트
});

// 특정 주문 조회
const getOrder = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (!order) {
        res.status(404).json({ message: 'Order not found' });
        return;
    }
    res.render('orderDetail', { order }); // 특정 주문 상세 렌더링
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

module.exports = {
    registerUser,
    loginUser,
    getUser,
    updateUser,
    deleteUser,
    createOrder,
    getOrder,
    updateOrder,
    deleteOrder,
    getOrderCreatePage,
    getRegisterPage,
    getLoginPage,
    getMyPage,
};
