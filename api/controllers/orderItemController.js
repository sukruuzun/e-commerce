const OrderItem = require('../models/OrderItem');

exports.getOrderItems = async (req, res) => {
    try {
        const orderItems = await OrderItem.find();
        res.json(orderItems);
    } catch (error) {
        res.status(500).json({ message: 'Sipariş kalemlerini getirme hatası', error });
    }
};

exports.getOrderItemById = async (req, res) => {
    try {
        const orderItem = await OrderItem.findById(req.params.id);
        if (!orderItem) return res.status(404).json({ message: 'Sipariş kalemi bulunamadı' });
        res.json(orderItem);
    } catch (error) {
        res.status(500).json({ message: 'Sipariş kalemi getirme hatası', error });
    }
};

exports.createOrderItem = async (req, res) => {
    try {
        const orderItem = new OrderItem(req.body);
        await orderItem.save();
        res.status(201).json(orderItem);
    } catch (error) {
        res.status(400).json({ message: 'Sipariş kalemi oluşturma hatası', error });
    }
};

exports.updateOrderItem = async (req, res) => {
    try {
        const orderItem = await OrderItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!orderItem) return res.status(404).json({ message: 'Sipariş kalemi bulunamadı' });
        res.json(orderItem);
    }   catch (error) {
        res.status(400).json({ message: 'Sipariş kalemi güncelleme hatası', error });
    }
};

exports.deleteOrderItem = async (req, res) => {
    try {
        const orderItem = await OrderItem.findByIdAndDelete(req.params.id);
        if (!orderItem) return res.status(404).json({ message: 'Sipariş kalemi bulunamadı' });
        res.json({ message: 'Sipariş kalemi silindi' });
    } catch (error) {
        res.status(500).json({ message: 'Sipariş kalemi silme hatası', error });
    }
};