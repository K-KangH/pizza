const express = require('express');
const router = express.Router();
const {
    registerUser,
    loginUser,
    getUser,
    updateUser,
    deleteUser,
    getOrderCreatePage,
    createOrder,
    getAllOrders,
    updateOrder,
    deleteOrder,
    getRegisterPage,
    getLoginPage,
} = require('./controllers/Controller');

// 회원가입 페이지 접근 및 처리
router
    .route('/register')
    .get(getRegisterPage) // 회원가입 페이지 접근
    .post(registerUser); // 회원가입 처리

// 로그인 페이지 접근 및 처리
router
    .route('/login')
    .get(getLoginPage) // 로그인 페이지 접근
    .post(loginUser); // 로그인 처리

// 주문 생성 및 전체 주문 조회
router
    .route('/orders/:id')
    .get(getOrderCreatePage) // 주문 작성 페이지 접근
    .post(createOrder); // 주문 작성

// 사용자 정보 조회, 수정, 삭제
router
    .route('/users/:id')
    .get(getUser) // 사용자 정보 조회
    .put(updateUser) // 사용자 정보 수정
    .delete(deleteUser); // 회원 탈퇴 및 관련 주문 삭제

// 주문 조회, 수정, 삭제
router
    .route('/orderlist/:id')
    .get(getAllOrders) // (:Id) 주문 조회 (관리자: 모든 주문, 사용자: 자신의 주문만)
    .put(updateOrder) // 특정 주문 수정
    .delete(deleteOrder); // 특정 주문 삭제

module.exports = router;
