const Rewiew = require('../models/rewiewModel');

exports.getRewiews = async (req, res) => {
    try {
        const rewiews = await Rewiew.find();
        res.json(rewiews);
    } catch (error) {
        res.status(500).json({ message: 'Yorumları getirme hatası', error });
    }
};

exports.getRewiewById = async (req, res) => {
    try {
        const rewiew = await Rewiew.findById(req.params.id);
        if (!rewiew) return res.status(404).json({ message: 'Yorum bulunamadı' });
        res.json(rewiew);
    } catch (error) {
        res.status(500).json({ message: 'Yorum getirme hatası', error });
    }
};

exports.createRewiew = async (req, res) => {
    try {
        const rewiew = new Rewiew(req.body);
        await rewiew.save();
        res.status(201).json(rewiew);
    } catch (error) {
        res.status(400).json({ message: 'Yorum oluşturma hatası', error });
    }
};

exports.updateRewiew = async (req, res) => {
    try {
        const rewiew = await Rewiew.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!rewiew) return res.status(404).json({ message: 'Yorum bulunamadı' });
        res.json(rewiew);
    }   catch (error) {
        res.status(400).json({ message: 'Yorum güncelleme hatası', error });
    }
};

exports.deleteRewiew = async (req, res) => {
    try {
        const rewiew = await Rewiew.findByIdAndDelete(req.params.id);
        if (!rewiew) return res.status(404).json({ message: 'Yorum bulunamadı' });
        res.json({ message: 'Yorum silindi' });
    } catch (error) {
        res.status(500).json({ message: 'Yorum silme hatası', error });
    }
};