// map + userid 이용 // 주문정보 반복 출력

//
import { useParams } from 'react-router-dom';

function OrderList() {
    const { id } = useParams();
    return (
        <div>
            <h1>내 주문조회</h1>
        </div>
    );
}

export default OrderList;
