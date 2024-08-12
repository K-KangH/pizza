import React, { createContext, useState, useContext } from 'react';

// AuthContext 생성
const AuthContext = createContext();

// useAuth 커스텀 훅
export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(null);
    const [introEnd, setIntroEnd] = useState(false);

    const saveUserInfo = (userData) => {
        setUserInfo(userData);
    };
    // 사용자 정보를 null로 설정
    const logout = () => {
        setUserInfo(null);
    };
    // introEnd 상태를 true로 설정
    const handleHideIntro = () => {
        setIntroEnd(true);
    };

    return (
        <AuthContext.Provider value={{ userInfo, saveUserInfo, logout, introEnd, handleHideIntro }}>
            {children}
        </AuthContext.Provider>
    );
};
