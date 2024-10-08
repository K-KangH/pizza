const mongoose = require('mongoose');
//스키마 정의
const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, uinque: true },
        userpw: { type: String, required: true },
        useraddress: { type: String, required: [true, '주소 필수기입'] },
    },
    {
        timestamps: true,
    }
);

//스카마 => 모델
//mongoose.model(모델명, 스키마명)
const User = mongoose.model('User', userSchema);

module.exports = User;
