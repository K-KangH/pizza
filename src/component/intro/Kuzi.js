import React, { useRef, useEffect, useState } from 'react';
// import '../css/Kuzi';

function Kuzi() {
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const dpr = window.devicePixelRatio;

        canvas.style.width = '100vw';
        canvas.style.height = '100vh';

        // 캔버스의 실제 픽셀 크기 설정
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;

        // 컨텍스트의 스케일 설정
        ctx.scale(dpr, dpr);

        // 배경 색상으로 사각형 그리기
        ctx.fillStyle = '#999';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // 텍스트 설정
        ctx.font = '30px Arial'; // 폰트 크기와 패밀리 설정
        ctx.fillStyle = 'black'; // 텍스트 색상
        ctx.textAlign = 'center'; // 텍스트 정렬
        ctx.textBaseline = 'middle'; // 텍스트 기준선

        // 텍스트 그리기
        ctx.fillText('문구 Text', canvas.width / 2, canvas.height / 2);

        // 지우기 도구 설정
        const ERASE_RADIUS = 30;

        const handleDrawingStart = () => {
            if (!isDrawing) {
                setIsDrawing(true);
            }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            id="kuzi"
            style={{ display: 'block' }}
        ></canvas>
    );
}

export default Kuzi;
