import React, { useRef } from 'react';
import './styles/css/styles.css';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from './components/AuthContext';
import Header from './components/Header';
import Intro from './components/Intro';
import Main from './components/Main';

import Login from './components/Login';
import Signup from './components/Signup';
import OrderCreate from './components/OrderCreate';
import OrderList from './components/OrderList';
import MyPage from './components/members/MyPage';

function App() {
    const { introEnd } = useAuth(); // introEnd 상태를 불러옴!
    const contentRef = useRef(null);
    const introRef = useRef(null);

    return (
        <div id="wrap">
            {!introEnd && (
                <div
                    id="intro"
                    ref={introRef}
                    style={{
                        position: 'relative',
                        height: '100vh',
                        width: '100%',
                    }}
                >
                    <Intro
                        contentRef={contentRef}
                        introRef={introRef}
                    />
                </div>
            )}
            {introEnd && ( // introEnd가 true 때만 렌더링
                <div
                    id="content"
                    ref={contentRef}
                    style={{ opacity: '1' }}
                >
                    <Header />
                    <Routes>
                        <Route
                            path="/users/:id"
                            element={<MyPage />}
                        />
                        <Route
                            path="/orders/:id"
                            element={<OrderCreate />}
                        />
                        <Route
                            path="/orderlist/:id"
                            element={<OrderList />}
                        />
                        <Route
                            path="/login"
                            element={<Login />}
                        />
                        <Route
                            path="/register"
                            element={<Signup />}
                        />
                        <Route
                            path="/"
                            element={<Main />}
                        />
                        <Route
                            path="/home"
                            element={<Main />}
                        />
                    </Routes>
                </div>
            )}
        </div>
    );
}

export default App;
