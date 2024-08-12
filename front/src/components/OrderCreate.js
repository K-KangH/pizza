import React, { useState } from 'react';
// import Header from './Header';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function OrderCreate() {
    const { id } = useParams();
    const [product, setProduct] = useState('');
    const [quantity, setQuantity] = useState('');
    const [orderbyid, setOrderbyid] = useState('');
    const [createdAt, setCreatedAt] = useState('');

    const orderCreateClick = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/orders/:id', { product, quantity, orderbyid, createdAt });
            console.log('', response.data);
            // 주문 작성
        } catch (error) {
            // 에러 처리 로직을 추가하세요. 예: 사용자에게 에러 메시지 표시
            alert('');
        }
    };

    return (
        <div>
            {/* <Header /> */}
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <form
                className="OrderCreate"
                onSubmit={orderCreateClick}
            >
                <h1>주문 페이지</h1>
                <input
                    type="text"
                    placeholder="아이디"
                    name="product"
                    id="product"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    required
                />
                {/* <label htmlFor="userpw">
                    <b>Password</b>
                </label>
                <input
                    type="password"
                    placeholder="비밀번호"
                    name="userpw"
                    id="userpw"
                    value={userpw}
                    onChange={(e) => setUserpw(e.target.value)}
                    required
                />
                <label htmlFor="pwCheck">
                    <b>Confirm Password</b>
                </label>
                <input
                    type="password"
                    placeholder="비밀번호 확인"
                    name="pwCheck"
                    id="pwCheck"
                    value={pwCheck}
                    onChange={(e) => setPwCheck(e.target.value)}
                    required
                /> */}
                <button type="submit">주문하기</button>
            </form>
        </div>
    );
}

export default OrderCreate;
