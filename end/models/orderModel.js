// const mongoose = require('mongoose');
// //스키마 정의
// const orderSchema = new mongoose.Schema({
//     product: { type: String, required: [true, '제품필수선택'] },
//     quantity: { type: Number, required: [true, '수량필수기입'] },
//     orderbyid: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//     createdAt: { type: Date },
// });

// //스카마 => 모델
// //mongoose.model(모델명, 스키마명)
// const Order = mongoose.model('Order', orderSchema);

// module.exports = Order;

const mongoose = require('mongoose');
//스키마 정의
const orderSchema = new mongoose.Schema({
    product: { type: String, required: [true, '제품필수선택'] },
    quantity: { type: Number, required: [true, '수량필수기입'] },
    orderbyid: { type: String, required: true },
    createdAt: { type: Date },
});

//스카마 => 모델
//mongoose.model(모델명, 스키마명)
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
