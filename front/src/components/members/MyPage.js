// import Profile from '.Profile.js';
// import UserOrderList from '../orders/UserOrderList';
import { useParams } from 'react-router-dom';

function MyPage() {
    const { id } = useParams();
    return (
        <div>
            <h1>내정보 페이지</h1>
        </div>
    );
}

export default MyPage;
