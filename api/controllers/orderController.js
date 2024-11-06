const Order = require('../models/Order');

exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Siparişleri getirme hatası', error });
    }
};

exports.getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) return res.status(404).json({ message: 'Sipariş bulunamadı' });
        res.json(order);
    } catch (error) {
        res.status(500).json({ message: 'Siparişi getirme hatası', error });
    }
};

exports.createOrder = async (req, res) => {
    try {
        const order = new Order(req.body);
        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ message: 'Sipariş oluşturma hatası', error });
    }
};

exports.updateOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!order) return res.status(404).json({ message: 'Sipariş bulunamadı' });
        res.json(order);
    }   catch (error) {
        res.status(400).json({ message: 'Sipariş güncelleme hatası', error });
    }
};

exports.deleteOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id);
        if (!order) return res.status(404).json({ message: 'Sipariş bulunamadı' });
        res.json({ message: 'Sipariş silindi' });
    } catch (error) {
        res.status(500).json({ message: 'Sipariş silme hatası', error });
    }
};