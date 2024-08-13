import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useAuth } from './AuthContext';

function OrderCreate() {
    const { userInfo } = useAuth();
    const [product, setProduct] = useState('');
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();

    const plusQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };
    const minusQuantity = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };

    // 1보다 작은 값을 입력할 수 없도록 설정
    const Quantityover0 = (e) => {
        const value = parseInt(e.target.value) || 1;
        setQuantity(value < 1 ? 1 : value);
    };

    const handleSelectChange = (e) => {
        setProduct(e.target.value);
    };
    // db 간에 연동해서 db 에 있는 주소데이터 가져오기
    //
    const orderCreateClick = async (e) => {
        e.preventDefault();

        const createdAt = new Date();
        try {
            // 주문 작성
            const response = await axios.post(`/orders/${id}`, {
                product,
                quantity,
                orderbyid: userInfo?.username,
                createdAt,
            });

            // 주문성공 메세지
            alert(response.data.message);
        } catch (error) {
            // 에러발생 메세지
            alert(error.response.data.message);
        }
    };

    return (
        <div className="ordercreate-container">
            <form
                className="OrderCreate"
                onSubmit={orderCreateClick}
            >
                <h1>주문 페이지</h1>
                <div className="flextest">
                    <label htmlFor="product">상품선택:</label>
                    <select
                        id="product"
                        value={product}
                        onChange={handleSelectChange}
                        required
                    >
                        <option value="">상품을 선택하세요</option>
                        <option value="Pizza">피자</option>
                        <option value="Burger">햄버거</option>
                        <option value="Pasta">파스타</option>
                    </select>
                    <label>선택된 상품:</label>
                    <input
                        value={product}
                        type="text"
                        readOnly
                    ></input>
                    <label>수량:</label>
                    <div
                        className="plusminus-btn"
                        onClick={plusQuantity}
                        style={{ cursor: 'pointer' }}
                    >
                        +
                    </div>
                    <input
                        value={quantity}
                        type="number"
                        onChange={Quantityover0}
                    ></input>
                    <div
                        className="plusminus-btn"
                        onClick={minusQuantity}
                        style={{ cursor: 'pointer' }}
                    >
                        −
                    </div>
                </div>
                <button type="submit">주문하기</button>
            </form>
        </div>
    );
}

export default OrderCreate;
