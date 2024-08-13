// map + userid 이용 // 주문정보 반복 출력

//
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function OrderList() {
    const { id } = useParams();
    // 백엔드에서 가져올 주문을 담을 변수 준비
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get(`/orderlist/${id}`);
                setOrders(response.data.orders); // 서버에서 받은 주문 데이터를 상태에 저장
            } catch (error) {
                alert('front : 주문 정보를 가져오는 중 오류 발생');
            }
        };
        fetchOrders();
    }, [id]); // id가 변경될 때마다 이 effect가 재실행됨effect가 재실행됨

    return (
        <div className="orderlist-container">
            <h1>{id === 'admin' ? '모든 주문' : '내 주문조회'}</h1>
            <dl>
                {id !== 'admin' &&
                    orders.map(order => (
                        <dt key={order._id}>
                            <p>상품명: {order.product}</p>
                            <p>수량: {order.quantity}</p>
                            <p>주문일시: {new Date(order.createdAt).toLocaleString()}</p>
                            <p>=====================================</p>
                        </dt>
                    ))}
                {id === 'admin' &&
                    orders.map(order => (
                        <dt key={order._id}>
                            <p>주문자: {order.orderbyid}</p>
                            <p>상품명: {order.product}</p>
                            <p>수량: {order.quantity}</p>
                            <p>주문일시: {new Date(order.createdAt).toLocaleString()}</p>
                            <p>=====================================</p>
                        </dt>
                    ))}
            </dl>
        </div>
    );
}

export default OrderList;
